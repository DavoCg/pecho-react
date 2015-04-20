var React = require('react-native');
var {StyleSheet} = React;

var mainGreen = '#66CA32';
var mainBackground = "#F1F1F1";
var border = "#DDDDDD";
var postFont = '#171717';

/**
 * Navigation style
 */
var navigation = StyleSheet.create({
    header: {
        backgroundColor: mainGreen
    }
});

/**
 * Places style
 */
var places = StyleSheet.create({
    wrapperNavigator: {
        flex: 1
    },
    containerList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: mainBackground,
        padding: 10,
        paddingTop: 0
    },
    containerDetails: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: mainBackground,
        padding: 10
    },
    name: {
        color: "#2c3e50",
        fontSize: 15
    },
    address: {
        color: "#2c3e50"
    },
    listView: {
        backgroundColor: mainBackground,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    placeRow: {
        paddingBottom: 30,
        backgroundColor: mainBackground,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    placeInfos: {
        backgroundColor: mainBackground,
        marginLeft: 10
    },
    thumbnail: {
        width: 32,
        height: 32
    }
});

/**
 * Home style
 */
var home = StyleSheet.create({
    wrapperNavigator: {
        flex: 1
    },
    containerList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: mainBackground,
        padding: 12,
        paddingTop: 0
    },
    listView: {
        backgroundColor: mainBackground,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    postHeader: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    post: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: border
    },
    postFooter: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 13,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: border
    },
    postUser: {
        fontSize: 12,
        marginLeft: 5,
        color: postFont,
        fontWeight: '600'
    },
    postMeta: {
        fontSize: 10,
        marginLeft: 6,
        color: '#838383',
        fontWeight: '400'
    },
    headerLeft:{
        flex: 0.8,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    headerRight:{
        flex: 0.2,
        padding: 4,
        alignItems: 'flex-end'
    },
    postContentContainer: {
        padding: 6,
        paddingTop: 10,
        paddingLeft: 0
    },
    postContent: {
        fontSize: 12,
        color: postFont,
        fontWeight: '400'
    },
    thumbnail: {
        width: 30,
        height: 30
    },
    postAction:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 25,
        backgroundColor: '#FAFAFA',
        flex: 1/3,
        borderRadius: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postActionText:{
        fontSize: 11,
        color: '#6B6B6B'
    },
    separator: {
        height: 25,
        width: 1,
        backgroundColor: border

    }

});

/**
 * Home style
 */
var search = StyleSheet.create({
    wrapperNavigator: {
        flex: 1
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2c3e50'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainBackground
    }
});

/**
 * Settings Style
 */
var settings = StyleSheet.create({
    wrapperNavigator: {
        flex: 1
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2c3e50'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainBackground
    }
});


module.exports = {
    places: places,
    home: home,
    settings: settings,
    navigation: navigation,
    search: search
};