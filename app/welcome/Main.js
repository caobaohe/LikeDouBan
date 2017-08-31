import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabBar from '../components/TabBar';

const theme = {
    // color: '#4F8EF7',
    color: '#4caf50',
    navBackgroundColor: '#fff',
    viewBackgroundColor: '#eee',
    header: {//样式对象
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 18,
        // fontWeight: '900',
        color: '#000',
        alignItems: 'center'
    },
    headerIconColor: '#4caf50'
}

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnMount() {
        console.log('componentWillUnMount');
    }

    render() {
        return (
            <TabBar navigator={this.props.navigator} theme={theme}/>
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
