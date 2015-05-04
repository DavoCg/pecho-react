var React = require('react-native');
var {StyleSheet, Image} = React;

var mainGreen = '#2ecc71';
var mainBackground = "#F1F1F1";
var border = "#DDDDDD";
var postFont = '#171717';

var globals = {
    mainGreen: '#2ecc71',
    //mainBackground: "#F1F1F1",
    mainBackground: "#EDEDED",
    border: "#CCCCCC",
    postFont: '#171717',

    mainBlue: "#3289C7",
    otherBlue: "#263644",

    greenTest: '#16a085'
};

/**
 * Navigation style
 */
var navigation = StyleSheet.create({
    header: {
        backgroundColor: globals.mainBlue
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
        backgroundColor: globals.mainBackground,
        padding: 10,
        paddingTop: 0
    },
    containerDetails: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: globals.mainBackground,
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
        backgroundColor: globals.mainBackground
    },
    placeRow: {
        paddingBottom: 30,
        backgroundColor: globals.mainBackground,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    placeInfos: {
        backgroundColor: globals.mainBackground,
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
        backgroundColor: globals.mainBackground,
        padding: 12,
        paddingTop: 0
    },
    listView: {
        backgroundColor: globals.mainBackground
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
        fontSize: 13,
        marginLeft: 5,
        color: postFont,
        fontWeight: '600'
    },
    postMeta: {
        fontSize: 11,
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
        paddingTop: 10,
        paddingBottom: 6,
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
        height: 30,
        backgroundColor: '#FAFAFA',
        flex: 1,
        borderRadius: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postActionText:{
        fontSize: 13,
        color: '#6B6B6B'
    },
    separator: {
        height: 25,
        width: 1,
        backgroundColor: border

    },
    imageContainer: {
        height: 220,
        flex: 1
    },
    image: {
        resizeMode:Image.resizeMode.ratio,
        marginTop: 10,
        flex:1
    }

});


/**
 * Search style
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
        backgroundColor: globals.mainBackground
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
        backgroundColor: globals.mainBackground
    }
});

/**
 * Login Style
 */
var login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globals.mainBackground
    },
    logo:{
        width: 270,
        height: 150,
        marginTop: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    formContainer: {
        justifyContent: 'center',
        marginTop: 100,
        padding: 20
    },
    title: {
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 150,
        color: '#878787'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: globals.mainGreen,
        borderColor: globals.mainGreen,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

var details = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globals.mainBackground
    }
});


module.exports = {
    globals: globals,
    places: places,
    home: home,
    settings: settings,
    navigation: navigation,
    search: search,
    login: login,
    details: details
};