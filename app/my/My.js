/**
 * 我的
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
    TouchableHighlight,
    Image,
    ScrollView,
    Platform,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('window').width;

export default class My extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme
        };
    }

    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.state.theme.viewBackgroundColor}]}>
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
                        <Text style={[styles.headerTitle, this.state.theme.headerTitle]}>我的</Text>
                    </View>
                    <View style={{alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={() => {
                            alert('设置')
                        }}>
                            <Icon name="md-settings" size={22} color={this.state.theme.headerIconColor}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                            indicatorStyle="white" style={{}} endFillColor="#00ff00">
                    < View style={styles.profile}>
                        <Image source={require('../images/ic_my_default_male_bg.webp')}
                               style={[styles.backgroundImage, styles.profile]}>
                            <Image source={require('../images/head.jpg')}
                                   style={{width: 80, height: 80, borderRadius: 40, marginLeft: 20, marginRight: 10}}/>
                            <View style={{width: WIDTH - 120}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'white', fontSize: 22, marginRight: 5}}>豆瓣</Text>
                                    <Icon name="md-contact" size={16} color="white"/>
                                </View>
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    borderColor: 'white',
                                    borderBottomWidth: 1,
                                    paddingBottom: 5,
                                    marginBottom: 10,
                                    // backgroundColor: 'red'
                                }}>
                                    <Text style={{color: 'white', fontSize: 12, flex: 3}}>ID:123456789</Text>
                                    <Text style={{color: 'white', flex: 1}}>个人主页</Text>
                                    <Icon name="ios-arrow-forward" size={16} color="white"/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'white', marginRight: 30}}>关注 0</Text>
                                    <Text style={{color: 'white'}}>被关注 0</Text>
                                </View>
                            </View>
                        </Image>
                    </View>

                    <View style={styles.notify}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            // justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#eee',
                            borderBottomWidth: 1
                        }}>
                            <Icon name="md-notifications" size={22} color={this.state.theme.headerIconColor}/>
                            <Text style={{marginLeft: 10}}>提醒</Text>
                            <Icon name="ios-arrow-forward" size={16} color={this.state.theme.viewBackgroundColor}
                                  style={{
                                      position: 'absolute',
                                      right: 0,
                                  }}/>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 14, color: '#ddd'}}>暂无提醒</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{flexDirection: 'row', borderColor: '#eee', borderBottomWidth: 1}}>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-heart" size={24} color="red"/>
                                    <Text style={styles.cardItemText}>喜欢</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-bookmark" size={24} color="royalblue"/>
                                    <Text style={styles.cardItemText}>日记</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-images" size={24} color="orange"/>
                                    <Text style={styles.cardItemText}>相册</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-radio" size={24} color="limegreen"/>
                                    <Text style={styles.cardItemText}>我的广播</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row', borderColor: '#eee', borderBottomWidth: 1}}>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="ios-film" size={24} color="orange"/>
                                    <Text style={styles.cardItemText}>电影·电视</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="ios-book" size={24} color="limegreen"/>
                                    <Text style={styles.cardItemText}>读书</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="ios-musical-notes" size={24} color="darkorange"/>
                                    <Text style={styles.cardItemText}>音乐</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-pin" size={24} color="royalblue"/>
                                    <Text style={styles.cardItemText}>同城活动</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-alarm" size={24} color="red"/>
                                    <Text style={styles.cardItemText}>豆瓣时间</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="ios-list-box" size={24} color="darkorchid"/>
                                    <Text style={styles.cardItemText}>豆列</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="md-cart" size={24} color="orange"/>
                                    <Text style={styles.cardItemText}>订单</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={this.state.theme.viewBackgroundColor} onPress={() => {
                                alert('p');
                            }}>
                                <View style={styles.cardItem}>
                                    <Icon name="logo-usd" size={24} color="royalblue"/>
                                    <Text style={styles.cardItemText}>钱包</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    headerTitle: {},
    profile: {
        height: 115,
        // justifyContent: 'space-around',
        // alignItems: 'flex-end'
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH,
        resizeMode: 'cover'//'contain','stretch','cover'
    },
    notify: {
        marginTop: 15,
        height: 90,
        backgroundColor: 'white',
        padding: 10
    },
    card: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        padding: 10
    },
    cardItem: {
        width: (WIDTH - 20) / 4,
        height: (WIDTH - 20) / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItemText: {
        marginTop: 10
    }
});

