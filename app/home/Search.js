/**
 * 首页--搜索页面
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
    Platform,
    Picker
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import BackComponent from '../components/BackComponent';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.backComponent = new BackComponent({...props, onHardwareBackPress: (e) => this.onHardwareBackPress(e)});
        this.state = {
            theme: this.props.theme,
            searchScope: 0
        };
    }

    onHardwareBackPress() {//android点击返回键
        this.props.navigator.pop();
        return true;
    }

    componentDidMount() {
        this.backComponent.componentDidMount();
    }

    componentWillUnMount() {
        this.backComponent.componentWillUnmount();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={this.state.theme.color}
                    barStyle="light-content"
                />
                <View style={[styles.header, {backgroundColor: '#4caf50'}]}>
                    <View>
                        <Picker mode="dropdown" style={{width: 80, color: 'white'}}
                                selectedValue={this.state.searchScope}
                                onValueChange={(itemValue, itemIndex) => {
                                    // alert(itemIndex + ',' + itemValue);
                                    this.setState({searchScope: itemValue})
                                }}>
                            <Picker.Item label="全部" value={0}/>
                            <Picker.Item label="电影/电视" value={1}/>
                            <Picker.Item label="图书" value={2}/>
                            <Picker.Item label="唱片" value={3}/>
                        </Picker>
                    </View>
                    <TextInput style={styles.headerTextInput}
                               underlineColorAndroid="transparent"
                               placeholder="搜索"
                               placeholderTextColor="#ccc">
                    </TextInput>
                    <View style={{alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.pop();
                        }}>
                            <Text>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.welcome}>
                    搜索
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
        flex: 1,
        height: (Platform.OS === 'ios') ? 30 : 40,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    }
});
