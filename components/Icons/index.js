var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image
} = React;

var styles = StyleSheet.create({
    icon:{
        width: 12,
        height: 12,
        marginRight: 4
    }
});

var icons = {
    like: require('image!like'),
    comment: require('image!comment'),
    heart: require('image!heartplus'),
    fly: require('image!fly')
};


var Icon = React.createClass({
    render: function render() {
        return (
            <Image source={icons[this.props.name]} style={styles.icon}/>
        )
    }
});


module.exports = Icon;