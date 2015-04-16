'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var styles = require('./../styles/pechoStyle').home;
var navigationStyle = require('./../styles/pechoStyle').navigation;

var BackButton = require('./../components/BackButton');
var Search = require('./../components/icons/Search');

var {
    StyleSheet,
    View,
    Text,
    NavigatorIOS
    } = React;

var HomeInitial = React.createClass({
    render: function render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Home Page
                </Text>
            </View>
        );
    }
});

/**
 * Home Navigator
 */
var firstRoute = {
    name: 'Home',
    component: HomeInitial
};

var Home = React.createClass({
    render: function render() {
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={navigationStyle.header}
                backButtonComponent={BackButton}
                rightCorner={Search}/>
        );
    }
});

module.exports = Home;