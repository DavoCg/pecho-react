'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var styles = require('./../styles/pechoStyle').settings;
var navigationStyle = require('./../styles/pechoStyle').navigation;

var BackButton = require('./../components/BackButton');
var Search = require('./../components/Search');

var {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    AsyncStorage
    } = React;

var SettingsInitial = React.createClass({

    getInitialState: function getInitialState(){
        return({
            username: ''
        })
    },

    componentWillMount: function componentWillMount(){
        AsyncStorage.getItem('username')
            .then((value) => {this.setState({username: value})})
            .done()
    },

    render: function render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Settings Page of {this.state.username}
                </Text>
            </View>
        );
    }
});

/**
 * Home Navigator
 */
var firstRoute = {
    name: 'Settings',
    component: SettingsInitial
};

var Settings = React.createClass({
    render: function render() {
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={navigationStyle.header}
                backButtonComponent={BackButton}/>
        );
    }
});

module.exports = Settings;