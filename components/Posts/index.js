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

    _handleClick: function _handleClick(){
        console.log('clikcel');
        console.log(arguments);
    },

    render: function render(){
        var post = this.props.post;
        var description = post.description || '';
        return (
            <View style={styles.postContentContainer}>
                <Text style={styles.postContent}>{description}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={post.content}
                        style={styles.image}
                        onClick={this._handleClick}
                    />
                </View>
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

    goToDetailsPage: function goToDetailsPage(){
        this.props.goToDetailsPage();
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
                        <TouchableOpacity onPress={this.goToDetailsPage}>
                            <Text style={styles.postUser}>{post.username}</Text>
                        </TouchableOpacity>
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
                        <Icon name={'heart'}/>
                        <Text style={[styles.postActionText]}>Pecho</Text>
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