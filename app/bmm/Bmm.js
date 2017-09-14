/**
 * 书影音
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Platform,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';

import BasicListView from './BasicListView';
import Movie from './Movie';
import TV from './TV';
import Read from "./Read";
import City from "./City";
import Music from "./Music";
import Market from "./Market";

export default class Bmm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            //react-native-tab-view
            index: 0,
            routes: [
                {key: 'movie', title: '电影'},
                {key: 'tv', title: '电视'},
                {key: 'read', title: '读书'},
                {key: 'city', title: '同城'},
                {key: 'music', title: '音乐'},
                {key: 'market', title: '市集'}
            ]
        };
    }

    _movie: Object;
    _tv: Object;
    _read: Object;
    _city: Object;
    _music: Object;
    _market: Object;

    _handleIndexChange = index => this.setState({index})

    _handleTabItemPress = ({route}) => {
        if (route !== this.state.routes[this.state.index]) {
            return;
        }
        switch (route.key) {
            case 'movie':
                if (this._movie) {
                    //this._movie.scrollTo({y: 0});//列表平滑动到最顶部
                }
                break;
            case 'tv':
                if (this._tv) {
                    //this._tv.scrollTo({y: 0});
                }
                break;
            case 'read':
                if (this._read) {
                    //this._read.scrollTo({y: 0});
                }
                break;
            case 'city':
                if (this._city) {
                    //this._city.scrollTo({y: 0});
                }
                break;
            case 'music':
                if (this._music) {
                    //this._music.scrollTo({y: 0});
                }
                break;
            case 'market':
                if (this._market) {
                    //this._market.scrollTo({y: 0});
                }
                break;
        }
    };

    _renderLabel = props => ({route, index}) => {
        let inputRange = props.navigationState.routes.map((x, i) => i);
        let outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? '#333' : '#999'),
        );
        const color = props.position.interpolate({
            inputRange,
            outputRange,
        });
        outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? 14 : 13),
        );
        const fontSize = props.position.interpolate({
            inputRange,
            outputRange,
        });
        return (
            <Animated.Text style={[styles.label, {color}, {fontSize}]}>
                {route.title}
            </Animated.Text>
        );
    };

    _renderHeader = props => <TabBar {...props}
                                     pressColor="rgba(155, 155, 155, .5)"
                                     style={styles.tabBar}
                                     tabStyle={styles.tabStyle}
                                     indicatorStyle={styles.indicatorStyle}
                                     onTabPress={this._handleTabItemPress}
                                     renderLabel={this._renderLabel(props)}
    />

    /*
    _renderScene = SceneMap({
        'movie': Movie,
        'tv': Movie,
        'read': Movie,
        'city': Movie,
        'music': Movie,
        'market': Movie,
    })
    */
    _renderScene = ({route}) => {
        switch (route.key) {
            case 'movie':
                return (
                    <Movie
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._movie = el)}
                        style={[styles.page, {backgroundColor: '#E3F4DD'}]}
                    />
                );
            case 'tv':
                return (
                    <TV
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._tv = el)}
                        style={[styles.page, {backgroundColor: '#E6BDC5'}]}
                        initialListSize={1}
                    />
                );
            case 'read':
                return (
                    <Read
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._read = el)}
                        style={[styles.page, {backgroundColor: '#EDD8B5'}]}
                        initialListSize={1}
                    />
                );
            case 'city':
                return (
                    <City
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._city = el)}
                        style={[styles.page, {backgroundColor: '#EDD8B5'}]}
                        initialListSize={1}
                    />
                );
            case 'music':
                return (
                    <Music
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._music = el)}
                        style={[styles.page, {backgroundColor: '#EDD8B5'}]}
                        initialListSize={1}
                    />
                );
            case 'market':
                return (
                    <Market
                        navigator={this.props.navigator}
                        theme={this.state.theme}
                        ref={el => (this._market = el)}
                        style={[styles.page, {backgroundColor: '#EDD8B5'}]}
                        initialListSize={1}
                    />
                );
            default:
                return null;
        }
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

                <TabViewAnimated
                    style={styles.tabViewContainer}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    swipeEnabled={false}//是否启用滑动手势
                    animationEnabled={true}//是否启用页面更改动画
                    //lazy
                />

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
    },
    label: {
        fontSize: 13,
        fontWeight: 'normal',
        margin: 4
    },
    //react-native-tab-view
    tabViewContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    tabBar: {//tabBar样式
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f5f5f5'
    },
    tabStyle: {//tab选中的样式
        // backgroundColor: '#f5f5f5',
        // padding: 0,
    },
    indicatorStyle: {
        backgroundColor: '#000',
    }
});
