'use strict';

var React = require('react-native');

var SearchIcon = require('./SearchIcon');
var SearchPage = require('../../pages/SearchPage');

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
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  },
  input: {
    backgroundColor: '#009943',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4
  }
});


var SearchBar = React.createClass({
  render() {
    return (
      <TextInput style={styles.input} placeholder="Search" />
    )
  }
});


var Search = React.createClass({

  goToSearch: function() {
    this.props.toRoute({
      name: "Search",
      component: SearchPage,
      titleComponent: SearchBar
    })
  },

  render() {
    return (
      <View style={styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />
      </View>
    )
  }
}); 


module.exports = Search;
