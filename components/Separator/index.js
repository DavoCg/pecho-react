'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    } = React;


var styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    }
});

var Separator = React.createClass({
    render: function render() {
        return (
            <View style={styles.separator} />
        )
    }
});


module.exports = Separator;