'use strict';

var React = require('react-native');
var styles = require('./../styles/pechoStyle').search;

var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;

var SearchPage = React.createClass({
    render: function render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search page
                </Text>
            </View>
        );
    }
});


module.exports = SearchPage;
