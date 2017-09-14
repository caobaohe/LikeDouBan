/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import Welcome from './welcome/Welcome';
import Main from './welcome/Main';

export default class Setup extends Component {
    render() {
        return (
            <Navigator
                // initialRoute={{component: Welcome}}
                initialRoute={{component: Main}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
                //configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
                configureScene={
                    (route, routeStack) => Navigator.SceneConfigs.FadeAndroid
                }
            />
        );
    }
}
