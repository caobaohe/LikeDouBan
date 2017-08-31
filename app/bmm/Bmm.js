/**
 * 书影音
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
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Bmm extends Component {

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
                    backgroundColor={this.state.theme.navBackgroundColor}
                    barStyle="light-content"
                />
                <View style={[styles.header, this.state.theme.header]}>
                    <View style={{alignItems: 'center', backgroundColor: '#eee'}}>
                    </View>
                    <View style={{
                        // backgroundColor: 'red',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: 40,
                        top: 0,
                        right: 40,
                        bottom: 0,
                    }}>
                        <Text style={[styles.headerTitle, this.state.theme.headerTitle]}>书影音</Text>
                    </View>
                    <View style={{alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={() => {
                            alert('聊天')
                        }}>
                            <Icon name="md-chatbubbles" size={22} color={this.state.theme.headerIconColor}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.welcome}>
                    Welcome to React Native!Bmm
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextInput: {
        flex: 1,
        height: (Platform.OS === 'ios') ? 30 : 40,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white',
        alignItems: 'center'
    }
});
