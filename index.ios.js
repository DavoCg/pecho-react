'use strict';

var React = require('react-native');
var Home = require('./pages/HomePage.js');
var Places = require('./pages/PlacesPage.js');
var Settings = require('./pages/SettingsPage.js');

var {
    AppRegistry,
    TabBarIOS,
    StyleSheet
    } = React;

var pechoReact = React.createClass({

    getInitialState: function(){
        return {
            selectedTab: 'home'
        };
    },

    render: function render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'home'}
                    title={'Home'}
                    icon={require('image!home-7')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home'
                        });
                    }}>

                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'places'}
                    title={'Places'}
                    icon={require('image!map-pin-7')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'places'
                        });
                    }}>
                    <Places/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'settings'}
                    title={'Settings'}
                    icon={require('image!icon_settings')}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'settings'
                        });
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
