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
    Platform,
    ListView,
    ActivityIndicator,
    Image,
    RefreshControl
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import Search from './Search';
import MovieDetail from "./MovieDetail";


let start = 0;
let count = 10;
let subjects = [];
let total;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loading: true,
            refreshing: false
        };
        this._fetchData('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count);
    }

    _fetchData(url) {
        //请求网络数据
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                total = responseData.total;
                subjects = subjects.concat(responseData.subjects);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(subjects),
                    loading: false
                });
            }).catch(e => console.log("something went wrong: " + e));
    }

    _renderRow(rowData) {
        let casts = '';
        let directors = '';
        for (let i = 0; i < rowData.casts.length; i++) {
            if (i != 0) {
                casts += '/';
            }
            casts += rowData.casts[i].name;
        }
        for (let d = 0; d < rowData.directors.length; d++) {
            if (d != 0) {
                directors += '/';
            }
            directors += rowData.directors[d].name;
        }
        return (
            <TouchableHighlight onPress={() => {
                this.props.navigator.push({
                    component: MovieDetail,
                    params: {
                        theme: this.state.theme,
                        movie: rowData,
                        ...this.props,
                    }
                });
            }} underlayColor="#eee">
                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderColor: '#eee',
                    borderBottomWidth: 1,
                    // backgroundColor: 'red'
                }}>
                    <View><Image source={{uri: rowData.images.medium}} style={styles.renderRowImage}/></View>
                    <View style={{marginLeft: 10, marginRight: 100}}>
                        <Text style={{fontSize: 18, color: 'black'}}>{rowData.title}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name={rowData.rating.average / 2 > 0 && rowData.rating.average / 2 <= 0.5 ? "md-star-half" : "md-star"}
                                size={18} color={rowData.rating.average / 2 > 0 ? "orange" : "gray"}/>
                            <Icon
                                name={rowData.rating.average / 2 > 1 && rowData.rating.average / 2 <= 1.5 ? "md-star-half" : "md-star"}
                                size={18} color={rowData.rating.average / 2 > 1 ? "orange" : "gray"}/>
                            <Icon
                                name={rowData.rating.average / 2 > 2 && rowData.rating.average / 2 <= 2.5 ? "md-star-half" : "md-star"}
                                size={18} color={rowData.rating.average / 2 > 2 ? "orange" : "gray"}/>
                            <Icon
                                name={rowData.rating.average / 2 > 3 && rowData.rating.average / 2 <= 3.5 ? "md-star-half" : "md-star"}
                                size={18} color={rowData.rating.average / 2 > 3 ? "orange" : "gray"}/>
                            <Icon
                                name={rowData.rating.average / 2 > 4 && rowData.rating.average / 2 <= 4.5 ? "md-star-half" : "md-star"}
                                size={18} color={rowData.rating.average / 2 > 4 ? "orange" : "gray"}/>
                            <Text style={{color: 'red', marginLeft: 5}}>
                                {rowData.rating.average}
                            </Text>
                        </View>
                        <Text>导演：{directors}</Text>
                        <Text>演员：{casts}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
    }

    _onEndReached() {
        start = start + count;
        this._fetchData('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count);
    }

    componentDidMount() {
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
                {
                    this.state.loading ?
                        <ActivityIndicator style={{flex: 1}} color="#4caf50" size="large"/>
                        :
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow.bind(this)}
                            refreshControl={
                                <RefreshControl
                                    colors = {[this.props.theme.color]}
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh.bind(this)}
                                />
                            }
                            onEndReachedThreshold={20}
                            onEndReached={this._onEndReached.bind(this)}
                            renderFooter={() => {
                                if (start + count < total) {
                                    return <View
                                        style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
                                        <ActivityIndicator
                                            color="#4caf50"
                                            size="small"/></View>
                                } else {
                                    return <View
                                        style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text>已经加载所有列表</Text></View>
                                }
                            }}
                        />
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
    },
    renderRowImage: {
        width: 65 * 1.5,
        height: 100 * 1.5
    }
});
