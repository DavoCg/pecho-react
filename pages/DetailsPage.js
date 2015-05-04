var React = require('react-native');
//var styles = require('./../styles/pechoStyle').details;
var Icon = require('FAKIconImage');



var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Image
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1"
    },
    header:{
        height: 150,
        backgroundColor: '#45525E',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    headerInfos: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    nameDescription:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    thumbnail:{
        width: 40,
        height: 40
    },
    name:{
        color: '#F1F1F1',
        fontSize: 17,
        marginTop: 0,
        fontWeight: 'bold'
    },
    description:{
        marginTop: 3,
        color: '#F1F1F1',
        fontSize: 12
    },
    icon:{
        width: 30,
        height: 30,
        marginTop: 7
    },
    metricsInfos:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    metric:{
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    metricCount:{
        color: '#F1F1F1',
        fontWeight: 'bold'
    },
    metricName:{
        color: '#F1F1F1'
    },
    separator:{
        width: 1,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        borderLeftColor: '#45525E',
        opacity: 0.2
    }
});


var DetailsPage = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            followed: false
        })
    },

    changeFollowedStatus: function changeFollowedStatus(){
        this.state.followed = !this.state.followed;
        this.setState(this.state)
    },

    render: function render() {

        var iconName = (this.state.followed) ? 'fontawesome|check' : 'fontawesome|plus-square-o';
        var iconColor = (this.state.followed) ? '#16A085' : '#F1F1F1';

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerInfos}>
                        <Image
                            style={styles.thumbnail}
                            source={require('image!placeholder3')}/>
                        <View style={styles.nameDescription}>
                            <Text style={styles.name}>{this.props.data.name}</Text>
                            <Text style={styles.description}>Trendy place in Paris</Text>
                        </View>
                        <TouchableOpacity onPress={this.changeFollowedStatus}>
                            <Icon
                                name={iconName}
                                size={30}
                                color={iconColor}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.metricsInfos}>
                        <View style={styles.metric}>
                            <Text style={styles.metricCount}>2536</Text>
                            <Text style={styles.metricName}>Pecho</Text>
                        </View>
                        <Text style={styles.separator}></Text>
                        <View style={styles.metric}>
                            <Text style={styles.metricCount}>754</Text>
                            <Text style={styles.metricName}>Proms</Text>
                        </View>
                        <Text style={styles.separator}></Text>
                        <View style={styles.metric}>
                            <Text style={styles.metricCount}>7686</Text>
                            <Text style={styles.metricName}>Visits</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
});


module.exports = DetailsPage;