'use strict';

var React = require('react-native');

var SearchIcon = require('./SearchIcon');
var SearchPage = require('../pages/SearchPage');

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
    backgroundColor: '#00993E',
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4
  }
});


var SearchBar = React.createClass({

    getInitialState: function getInitialState() {
        return {
            width: 0
        }
    },

    componentDidMount: function componentDidMount(){
        this._expandSearchBar();
    },

    componentWillUnmount : function componentWillUnmount(){
        this.setState({width: 0});
    },

    _expandSearchBar: function _expandSearchBar(){
        requestAnimationFrame(() => {
            this.setState({ width: this.state.width + 20 });
            if (this.state.width < 220) return this._expandSearchBar();
            return this.refs['searchInput'].focus()
        })
    },

    render: function render() {
        var width = this.state.width;
        return (
            <TextInput ref="searchInput" style={[ styles.input, { width: width }]} placeholder="Search" />
        )
    }
});


var Search = React.createClass({

    goToSearch: function gotToSearch() {
        this.props.toRoute({
        name: "Search",
        component: SearchPage,
        titleComponent: SearchBar
        })
    },

    render: function render() {
        return (
            <View style={styles.iconContainer}>
                <SearchIcon goToSearch={this.goToSearch} />
            </View>
        )
    }
}); 


module.exports = Search;
