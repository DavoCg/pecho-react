'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginTop: 4,
    marginRight: 15
  }
});

var SettingsIcon = React.createClass({

    goToSettings: function() {
    this.props.goToSettings();
  },

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSettings}>
          <Icon
              name='fontawesome|cog'
              size={24}
              color='#ffffff'
              style={styles.icon}
          />
      </TouchableHighlight>
    )
  }
});


module.exports = SettingsIcon;
