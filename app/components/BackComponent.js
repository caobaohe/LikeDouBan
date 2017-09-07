/**
 * 封装的基础组建
 * 1、android返回键监听功能
 */

import React, {Component} from 'react';
import {
    BackHandler
} from 'react-native';

export default class BackComponent extends Component {

    constructor(props) {
        super(props);
        this._onHardwareBackPress = this.onHardwareBackPress.bind(this);
        this.props = props;
    }

    componentWillMount() {

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onHardwareBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
    }

    onHardwareBackPress(e) {
        return this.props.onHardwareBackPress(e);
    }

}
