'use strict';

var React = require('react-native');
var Router = require('react-native-router');

var PlaceDetails = require('./DetailsPage');

var BackButton = require('./../components/BackButton');
var Settings = require('./../components/Settings');
var Posts = require('./../components/Posts');

var styles = require('./../styles/pechoStyle').home;
var navigationStyle = require('./../styles/pechoStyle').navigation;

var posts = require('../utils/posts');

var {
    StyleSheet,
    View,
    ListView,
    Text,
    NavigatorIOS,
    Image
    } = React;

var Timeline = React.createClass({

    getInitialState: function getInitialState(){
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
    },

    componentDidMount: function componentDidMount(){
        this.fetchData();
    },

    fetchData: function fetchData(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(posts),
            loaded: true
        });
    },

    goToDetailsPage: function goToDetailsPage(){
        this.props.toRoute({
            component: PlaceDetails,
            data: {name: 'Default Name'}
        });
    },

    renderPost: function renderPost(post){
        /**
         * Posts[post.type] can be enum: {text, video, image , multiImages}
         */
        var PostHeader = Posts.header;
        var PostFooter = Posts.footer;
        var RenderedPost = Posts[post.type];
        return(
            <View>
                <View style={styles.post}>
                    <PostHeader goToDetailsPage={this.goToDetailsPage} post={post}/>
                    <RenderedPost post={post}/>
                </View>
                <PostFooter style={post.postFooter} post={post}/>
            </View>

        );

    },

    render: function render(){
        return (
            <View style={styles.containerList}>
                <ListView
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPost}
                    style={styles.listView}>
                </ListView>
            </View>
        );
    }
});

/**
 * Home Navigator
 */
var firstRoute = {
    name: 'Timeline',
    component: Timeline,
    rightCorner: Settings
};

var Home = React.createClass({
    render: function render(){
        return (
                <Router
                    firstRoute={firstRoute}
                    headerStyle={navigationStyle.header}
                    backButtonComponent={BackButton}/>
        );
    }
});

module.exports = Home;