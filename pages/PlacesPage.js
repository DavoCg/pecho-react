'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var styles = require('./../styles/pechoStyle').places;
var navigationStyle = require('./../styles/pechoStyle').navigation;

var BackButton = require('./../components/BackButton');
var Search = require('./../components/icons/Search');

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    NavigatorIOS,
    TouchableOpacity
} = React;

var api = {
    REQUEST_URL : 'http://52.17.76.123:3000/places?lat=48.864616&lon=2.348069&distance=20000+&hashtags=clopes'
};

/**
 * Place details Component
 */
var PlaceDetails = React.createClass({
    render: function render() {
        return (
            <View style={styles.containerDetails}>
                <Text style={styles.address}>Distance : {this.props.data.distance} meters</Text>
            </View>
        );
    }
});

/**
 * PlacesList Component
 */

var PlacesList = React.createClass({

    getInitialState: function getInitialState(){
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    },

    componentDidMount: function componentDidMount(){
        this.fetchData();
    },

    fetchData: function fetchData() {
        fetch(api.REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true
                });
            })
            .done();
    },

    _onPress: function _onPress(place){
        this.props.toRoute({
            name: place.name,
            component: PlaceDetails,
            data: place
        });
    },

    renderPlace: function renderPlace(place){
        return(
            <TouchableOpacity onPress={this._onPress.bind(this, place)}>
            <View style={styles.placeRow}>
                    <Image
                        source={require('image!ios7-location-outline')}
                        style={styles.thumbnail}>
                    </Image>
                    <View style={styles.placeInfos}>
                        <Text style={styles.name}>{place.name}</Text>
                    </View>
            </View>
            </TouchableOpacity>
        );
    },

    render: function render() {
        return (
            <View style={styles.containerList}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPlace}
                style={styles.listView}>
                </ListView>
            </View>
        );
    }
});


/**
 * Places Navigator
 */
var firstRoute = {
    name: 'My Places',
    component: PlacesList
};

var Places = React.createClass({
    render: function render() {
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={navigationStyle.header}
                backButtonComponent={BackButton}/>
        );
    }
});

module.exports = Places;