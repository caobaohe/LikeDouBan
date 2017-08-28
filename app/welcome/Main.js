import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabBar from '../components/TabBar';

const theme = {
    color: '#4F8EF7',
    color2: '#4caf50',
    header: {
        backgroundColor: '#4F8EF7'
    }
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
