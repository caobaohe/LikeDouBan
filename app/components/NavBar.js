/**
 * 顶部导航栏
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
    Platform,
    Share
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: this.props.theme
        }
    }

    componentWillMount() {
    }

    render() {
        return (

            <View style={[styles.header, this.state.theme.header]}>
                <View style={{alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.pop();
                    }}>
                        <Icon name="md-arrow-round-back" size={22} color={this.state.theme.headerIconColor}/>
                    </TouchableOpacity>
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
                    <Text style={[styles.headerTitle, this.state.theme.headerTitle]}>{this.props.movie.title}</Text>
                </View>
                <View style={{alignItems: 'center', padding: 10}}>
                    {
                        this.props.rightButton ? this.props.rightButton : null
                    }
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {},
});