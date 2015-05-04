'use strict';

var React = require('react-native');
var Router = require('react-native-router');

var PlaceDetails = require('./DetailsPage');

var BackButton = require('./../components/BackButton');
var Search = require('./../components/Settings');

var styles = require('./../styles/pechoStyle').places;
var navigationStyle = require('./../styles/pechoStyle').navigation;

var api = require('./../utils/api');
console.log(api);

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    NavigatorIOS,
    TouchableOpacity
} = React;


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
        api.getPlaces('48.864616', '2.348069', '20000', ['clopes'])
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
            name: 'Details',
            component: PlaceDetails,
            data: place
        });
    },

    renderPlace: function renderPlace(place){
        return(
            <View>
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
            </View>
        );
    },

    render: function render() {
        return (
            <View style={styles.containerList}>
                <ListView
                showsVerticalScrollIndicator={false}
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