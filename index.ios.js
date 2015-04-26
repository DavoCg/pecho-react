'use strict';

var React = require('react-native');
var Home = require('./pages/HomePage.js');
var Places = require('./pages/PlacesPage.js');
var Settings = require('./pages/SettingsPage.js');
var Login = require('./pages/LoginPage.js');

var {
    AppRegistry,
    TabBarIOS,
    StyleSheet,
    View,
    Text,
    AsyncStorage
    } = React;

var pechoReact = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            logged: false,
            selectedTab: 'home'
        })
    },

    _onLogged: function _onLogged(nickname){
        var self = this;
        AsyncStorage.setItem('username', nickname, function(err){
            if(err) console.log(err);
            self.state.logged = true;
            self.setState(self.state);
        })
    },

    render: function render() {
        if(!this.state.logged){
            return(
                <Login onLogged={this._onLogged}/>
            );
        }


        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'home'}
                    title={'Home'}
                    icon={require('image!home-7')}
                    onPress={() => {
                        this.state.selectedTab = 'home';
                        this.setState(this.state);
                    }}>

                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'places'}
                    title={'Places'}
                    icon={require('image!map-pin-7')}
                    onPress={() => {
                        this.state.selectedTab = 'places';
                        this.setState(this.state);
                    }}>
                    <Places/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'settings'}
                    title={'Settings'}
                    icon={require('image!icon_settings')}
                    onPress={() => {
                        this.state.selectedTab = 'settings';
                        this.setState(this.state);
                    }}>
                    <Settings/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#dfdfdf',
        flex: 1,
        color: '#ff0000',
        tintColor: '#877324'
    }
});



AppRegistry.registerComponent('pechoReact', () => pechoReact);
