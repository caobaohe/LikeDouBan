/**
 * 启动欢迎页面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated,
    StatusBar
} from 'react-native';

import moment from 'moment';

import Main from './Main';

const WIDTH = Dimensions.get('window').width;
export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 3,
            fadeAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        const {navigator} = this.props;
        this.timer = setInterval(() => {
            this.setState(previousState => {
                let time = 0;
                if (previousState.time > 0) {
                    time = previousState.time - 1;
                } else {
                    clearInterval(this.timer);
                    navigator.resetTo({
                        component: Main,
                        params: {
                            // theme:this.theme
                        }
                    });
                }
                console.log(time);
                return {time: time}
            });
        }, 1000);
        Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 2000}).start();
    }

    componentWillUnMount() {
        console.log('componentWillUnMount');
        clearInterval(this.timer);
    }

    render() {
        let {fadeAnim} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF"
                           barStyle="light-content"/>
                <View style={styles.header}>
                    <Animated.Text
                        style={[{
                            fontSize: 108,
                            color: '#4caf50'
                        }, {opacity: fadeAnim}]}>:)</Animated.Text>
                </View>

                <Text style={styles.welcome}>
                    {moment().format('LL')}，
                    {moment().format('dddd')}
                </Text>
                <Text style={styles.instructions}>与你相遇，好幸运</Text>
                <View style={styles.footer}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../images/ic_share_status.png')} style={{width: 50, height: 50}}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 24}}>DouBan</Text>
                            <Text>我们的豆瓣</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.skip}>
                    <TouchableOpacity onPress={() => {
                        const {navigator} = this.props;
                        clearInterval(this.timer);
                        navigator.resetTo({
                            component: Main,
                            params: {
                                // theme:this.theme
                            }
                        })
                    }}>
                        <Text>跳过{this.state.time}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    header: {
        position: 'absolute',
        top: 60
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: WIDTH,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skip: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 15
    }
});
