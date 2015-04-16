var React = require('react-native');
var {StyleSheet} = React;

/**
 * Navigation style
 */
var navigation = StyleSheet.create({
    header: {
        backgroundColor: '#2ECC71'
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
        backgroundColor: '#ecf0f1',
        padding: 10,
        paddingTop: 0
    },
    containerDetails: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ecf0f1',
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
        backgroundColor: '#ecf0f1',
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    placeRow: {
        paddingBottom: 30,
        backgroundColor: '#ecf0f1',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    placeInfos: {
        backgroundColor: '#ecf0f1',
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
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2c3e50'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
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
        backgroundColor: '#ecf0f1'
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
        backgroundColor: '#ecf0f1'
    }
});


module.exports = {
    places: places,
    home: home,
    settings: settings,
    navigation: navigation,
    search: search
};