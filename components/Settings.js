'use strict';

var React = require('react-native');

var SettingsIcon = require('./SettingsIcon');
var SettingsPage = require('../pages/SettingsPage');

var {
  StyleSheet,
  View,
  TextInput
} = React;


var styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row'
  },
  icon: {
    width: 26,
    height: 26,
    marginTop: 4,
    marginRight: 15
  }
});





var Search = React.createClass({

    goToSettings: function goToSettings() {
        this.props.toRoute({
        name: "Settings",
        component: SettingsPage
        })
    },

    render: function render() {
        return (
            <View style={styles.iconContainer}>
                <SettingsIcon goToSettings={this.goToSettings} />
            </View>
        )
    }
}); 


module.exports = Search;
