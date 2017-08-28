/**
 * 启动欢迎页面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Main from './Main';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 3
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
                }else{
                    clearInterval(this.timer);
                    navigator.resetTo({
                        component: Main,
                        params:{
                            // theme:this.theme
                        }
                    });
                }
                console.log(time);
                return {time: time}
            });
        }, 1000);
    }

    componentWillUnMount() {
        console.log('componentWillUnMount');
        clearInterval(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome}>
                    {this.state.time}S
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});
