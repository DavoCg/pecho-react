
'use strict';

var React = require('react-native');
var Home = require('./pages/HomePage.js');
var Places = require('./pages/PlacesPage.js');
var Settings = require('./pages/SettingsPage.js');
var Login = require('./pages/LoginPage.js');
var Search = require('./pages/SearchPage.js');

var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;
var Icon = require('FAKIconImage');

var Viewport = require('react-native-viewport');

var {
    AppRegistry,
    TabBarIOS,
    StyleSheet,
    View,
    Image,
    Text,
    AsyncStorage,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback
    } = React;

var styles = StyleSheet.create({


    container:{
        flex: 1
    },
    searchTab:{
        position: 'absolute',
        bottom: -15,
        backgroundColor: '#3289C7',
        borderColor: '#EDEDED',
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 27,
        height: 27,
        marginTop: -4
    }
});

var pechoReact = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            logged: false,
            selectedTab: 'home',
            viewPortWidth: 0,
            searchTabDimension: 75
        })
    },

    componentDidMount: function componentWillMount(){
        Viewport.getDimensions((dim) => {
            this.state.viewPortWidth = dim.width;
            this.setState(this.state);
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


        /*if(!this.state.logged){return(<Login onLogged={this._onLogged}/>);}*/
        var searchTab = (!!this.state.viewPortWidth) ?
            <TouchableWithoutFeedback underlayColor="transparent" onPress={() => {
                this.state.selectedTab = 'search';
                /*this.state.searchTabDimension = 100;*/
                this.setState(this.state);
            }}>
                <View style={[styles.searchTab,
                    {left: (this.state.viewPortWidth - this.state.searchTabDimension) / 2 },
                    {width: this.state.searchTabDimension, height: this.state.searchTabDimension, borderRadius: this.state.searchTabDimension/2}]}>
                    <Image source={require('image!search_icon')} style={styles.icon} />
                </View>
            </TouchableWithoutFeedback>
            : <View></View>;

        return (

            <View style={styles.container}>

                <SMXTabBarIOS
                    selectedTab={this.state.selectedTab}
                    tintColor={'#ffffff'}
                    style={styles.tabStyle}
                    barTintColor={'#263644'}>

                    <SMXTabBarItemIOS
                        selected={this.state.selectedTab === 'home'}
                        iconName={'fontawesome|home'}
                        iconSize={27}
                        title={''}
                        onPress={() => {
                            this.state.selectedTab = 'home';
                            this.setState(this.state);
                        }}>
                        <Home/>
                    </SMXTabBarItemIOS>

                    <SMXTabBarItemIOS
                        selected={this.state.selectedTab === 'search'}
                        iconName={'fontawesome|fire'}
                        iconSize={2}>
                        <Search/>
                    </SMXTabBarItemIOS>

                    <SMXTabBarItemIOS
                        selected={this.state.selectedTab === 'places'}
                        iconName={'fontawesome|map-marker'}
                        iconSize={27}
                        title={''}
                        onPress={() => {
                            this.state.selectedTab = 'places';
                            this.setState(this.state);
                        }}>
                        <Places/>
                    </SMXTabBarItemIOS>
                </SMXTabBarIOS>
                {searchTab}
            </View>

        );
    }
});




AppRegistry.registerComponent('pechoReact', () => pechoReact);

