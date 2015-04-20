var React = require('react-native');
var Router = require('react-native-router');

var Icon = require('../Icons');

var styles = require('./../../styles/pechoStyle').home;

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    NavigatorIOS,
    TouchableOpacity
    } = React;

var textPost = React.createClass({
    render: function render(){
        var post = this.props.post;
        return (
            <View style={styles.postContentContainer}>
                <Text style={styles.postContent}>{post.content}</Text>
            </View>
        );
    }
});

var videoPost = React.createClass({
    render: function render(){
        return (
            <View style={styles.postContentContainer}>
            </View>
        );
    }
});

var singleImagePost = React.createClass({
    render: function render(){
        return (
            <View style={styles.postContentContainer}>
            </View>
        );
    }
});

var multiImagesPost = React.createClass({
    render: function render(){
        return (
            <View style={styles.postContentContainer}>
            </View>
        );
    }
});

var header = React.createClass({

    getInitialState: function getInitialState(){
        return {
            liked: false,
            rightIconHeight: 16,
            rightIconWidth: 16
        }
    },

    render: function render(){
        var post = this.props.post;

        return (

            <View style={styles.postHeader}>
                <View style={styles.headerLeft}>
                    <Image
                        source={post.thumbnail}
                        style={styles.thumbnail}>
                    </Image>
                    <View>
                        <Text style={styles.postUser}>{post.username}</Text>
                        <Text style={styles.postMeta}>{post.date}</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>

                </View>
            </View>

        );
    }
});

var footer = React.createClass({

    _onPress: function _onPress(){
        console.log('press')
    },

    render: function render(){

        var post = this.props.post;

        return (
            <View style={styles.postFooter}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.postAction}>
                        <Icon name={'like'}/>
                        <Text style={styles.postActionText}>Like</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.postAction}>
                        <Icon name={'comment'}/>
                        <Text style={styles.postActionText}>Comment</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.postAction}>
                        <Icon name={'heart'}/>
                        <Text style={[styles.postActionText, {fontWeight: 'bold'}]}>Pecho</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
});




module.exports = {
    header: header,
    footer: footer,
    text: textPost,
    video: videoPost,
    image: singleImagePost,
    multiImages: multiImagesPost
};