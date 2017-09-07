/**
 * 首页--电影详情页面
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
    Picker,
    ScrollView,
    Image,
    Dimensions,
    ActivityIndicator,
    Share
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import BackComponent from '../components/BackComponent';
import NavBar from '../components/NavBar';
import CollapsibleText from '../components/CollapsibleText';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
var movie;
var posterDesc;
export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.backComponent = new BackComponent({...props, onHardwareBackPress: (e) => this.onHardwareBackPress(e)});
        this.state = {
            theme: this.props.theme,
            loading: true
        };
        this._fetchData(`https://api.douban.com/v2/movie/subject/${this.props.movie.id}`);
    }

    //请求电影详情数据
    _fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                movie = responseData;
                console.log(movie);
                posterDesc = movie.year;
                for (let i = 0; i < movie.genres.length; i++) {
                    posterDesc += '/';
                    posterDesc += movie.genres[i];
                }
                this.setState({
                    loading: false
                });
            }).catch(e => console.log("something went wrong: " + e));
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

    _renderFilmmaker(casts, type) {
        let result = [];
        for (let i = 0; i < casts.length; i++) {
            result.push(<View key={casts[i].id} style={{width: 70, marginRight: 10}}>
                <Image source={{uri: casts[i].avatars.large}} style={{width: 70, height: 100}}/>
                <Text numberOfLines={1} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>{casts[i].name}</Text>
                {type == 0 ?
                    <Text numberOfLines={1} style={{
                        alignItems: 'center', justifyContent: 'center',
                        textAlign: 'center'
                    }}>导演</Text> :
                    <Text numberOfLines={1} style={{
                        alignItems: 'center', justifyContent: 'center',
                        textAlign: 'center'
                    }}>演员</Text>}
            </View>);
        }
        return result;
    }

    render() {
        //顶部导航栏的右侧按钮
        var rightButton = <TouchableOpacity onPress={() => {
            Share.share({
                message: '分享一部超好看的电影：《' + movie.title + '》' + movie.alt
            }).then(this._showResult)
                .catch((error) => this.setState({result: 'error: ' + error.message}));
        }}>
            <Icon name="md-share" size={22} color={this.state.theme.headerIconColor}/>
        </TouchableOpacity>;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={this.state.theme.color}
                    barStyle="light-content"
                />
                <NavBar theme={this.state.theme} navigator={this.props.navigator} movie={this.props.movie}
                        rightButton={rightButton}/>
                {
                    this.state.loading ?
                        <ActivityIndicator style={{flex: 1}} color="#4caf50" size="large"/>
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.moviePoster}>
                                <Image source={{uri: movie.images.large}}
                                       style={{height: HEIGHT * 0.4 - 40, width: (HEIGHT * 0.4 - 40) * 0.676}}/>
                            </View>
                            <View style={styles.moviePosterTitle}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={styles.posterDesc}>
                                        <Text style={{fontSize: 18, color: '#000'}}>{movie.title}</Text>
                                        <Text style={{fontSize: 12}}>{posterDesc}</Text>
                                        <Text style={{fontSize: 12}}>原名：{movie.original_title}</Text>
                                        <Text style={{fontSize: 12}}>上映时间：{movie.year}</Text>
                                    </View>
                                    <View style={styles.average}>
                                        <Text style={{fontSize: 10}}>豆瓣评分</Text>
                                        <Text style={{fontSize: 18, color: '#000'}}>{movie.rating.average}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Icon
                                                name={movie.rating.average / 2 > 0 && movie.rating.average / 2 <= 0.5 ? "md-star-half" : "md-star"}
                                                size={18} color={movie.rating.average / 2 > 0 ? "orange" : "gray"}/>
                                            <Icon
                                                name={movie.rating.average / 2 > 1 && movie.rating.average / 2 <= 1.5 ? "md-star-half" : "md-star"}
                                                size={18} color={movie.rating.average / 2 > 1 ? "orange" : "gray"}/>
                                            <Icon
                                                name={movie.rating.average / 2 > 2 && movie.rating.average / 2 <= 2.5 ? "md-star-half" : "md-star"}
                                                size={18} color={movie.rating.average / 2 > 2 ? "orange" : "gray"}/>
                                            <Icon
                                                name={movie.rating.average / 2 > 3 && movie.rating.average / 2 <= 3.5 ? "md-star-half" : "md-star"}
                                                size={18} color={movie.rating.average / 2 > 3 ? "orange" : "gray"}/>
                                            <Icon
                                                name={movie.rating.average / 2 > 4 && movie.rating.average / 2 <= 4.5 ? "md-star-half" : "md-star"}
                                                size={18} color={movie.rating.average / 2 > 4 ? "orange" : "gray"}/>
                                        </View>
                                        <Text style={{fontSize: 10}}>{movie.ratings_count}人</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.movieDesc}>
                                <Text style={{marginTop: 10, marginBottom: 10}}>简介 </Text>
                                <CollapsibleText numberOfLines={4} style={{fontSize: 16, color: '#333'}}
                                                 expandTextStyle={{color: this.props.theme.color}}>{movie.summary}</CollapsibleText>
                                <Text style={{marginTop: 10, marginBottom: 10}}>影人</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                            style={styles.filmmaker}>
                                    {this._renderFilmmaker(movie.directors, 0)}
                                    {this._renderFilmmaker(movie.casts, 1)}
                                </ScrollView>
                                <Text style={{marginTop: 10, marginBottom: 10}}>预告片/剧照</Text>
                                <CollapsibleText numberOfLines={4} style={{fontSize: 16, color: '#333'}}
                                                 expandTextStyle={{color: this.props.theme.color}}>暂无信息</CollapsibleText>
                                <Text style={{marginTop: 10, marginBottom: 10}}>获奖记录</Text>
                                <CollapsibleText numberOfLines={4} style={{fontSize: 16, color: '#333'}}
                                                 expandTextStyle={{color: this.props.theme.color}}>暂无信息</CollapsibleText>
                            </View>
                        </ScrollView>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    moviePoster: {
        height: HEIGHT * 0.4,
        backgroundColor: '#1e181f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    moviePosterTitle: {//电影海报信息
        flexDirection: 'row'
    },
    posterDesc: {
        margin: 20,
        width: WIDTH - 160
    },
    average: {
        margin: 20,
        width: 80,
        height: 80,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,//android阴影
        //ios阴影
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5
    },
    movieDesc: {
        padding: 20
    },
    filmmaker: {//导演演员信息
        // backgroundColor: 'red'
    }
});
