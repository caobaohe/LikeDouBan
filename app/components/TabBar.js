/**
 * 底部tabs导航
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from '../home/Home';
import Bmm from '../bmm/Bmm';
import My from '../my/My';

export default class TabBar extends Component {

    static defaultProps = {
        color: 'red',
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'my',
            theme: this.props.theme
        }
    }

    componentWillMount() {
        // const {color, normalColor} = this.props;
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    selectedTitleStyle={{color: this.state.theme.color}}
                    renderIcon={() => <Icon name="md-home" size={26}/>}
                    renderSelectedIcon={() => <Icon name="md-home" size={26} color={this.state.theme.color}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home navigator={this.props.navigator} theme={this.state.theme}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'bmm'}
                    title="书影音"
                    selectedTitleStyle={{color: this.state.theme.color}}
                    renderIcon={() => <Icon name="md-bookmarks" size={26}/>}
                    renderSelectedIcon={() => <Icon name="md-bookmarks" size={26}
                                                    color={this.state.theme.color}/>}
                    onPress={() => this.setState({selectedTab: 'bmm'})}>
                    <Bmm navigator={this.props.navigator} theme={this.state.theme}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={{color: this.state.theme.color}}
                    renderIcon={() => <Icon name="md-contact" size={26}/>}
                    renderSelectedIcon={() => <Icon name="md-contact" size={26}
                                                    color={this.state.theme.color}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}>
                    <My navigator={this.props.navigator} theme={this.state.theme}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}


const styles = StyleSheet.create({});