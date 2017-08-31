/**
 * 首页
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import Search from './Search';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#4caf50'}
                    barStyle="light-content"
                />
                <View style={[styles.header, {backgroundColor: '#4caf50'}]}>
                    <View style={styles.headerTextInput}>
                        <Icon name="md-search" size={22} color="gray" style={{marginLeft: 10}} onPress={() => {
                            this.props.navigator.push({
                                component: Search,
                                params: {
                                    theme: this.state.theme,
                                    ...this.props,
                                },
                            });
                        }}/>
                        <Text style={[{
                            alignItems: 'flex-start',
                            // backgroundColor: 'red',
                            position: 'absolute',
                            left: 40,
                            right: 40,
                        }, this.state.theme.headerText]} onPress={() => {
                            this.props.navigator.push({
                                component: Search,
                                params: {
                                    theme: this.state.theme,
                                    ...this.props,
                                },
                            });
                        }}>影视 图书 唱片 小组 舞台剧等</Text>
                        <Icon name="md-qr-scanner" size={22} color="gray" style={{marginRight: 10}} onPress={() => {
                            alert('扫码')
                        }}/>
                    </View>
                    <View style={{alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={() => {
                            alert('聊天')
                        }}>
                            <Icon name="md-chatbubbles" size={22} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.welcome}>
                    Welcome to React Native!Home
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: (Platform.OS === 'ios') ? 30 : 40,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    }
});
