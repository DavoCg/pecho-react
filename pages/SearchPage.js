'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var styles = require('./../styles/pechoStyle').search;
var navigationStyle = require('./../styles/pechoStyle').navigation;
var BackButton = require('./../components/BackButton');
var _ = require('lodash');

var ResultsPage = require('./ResultsPage');

var Viewport = require('react-native-viewport');
var Icon = require('FAKIconImage');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} = React;

var stylesBis = StyleSheet.create({
    input: {
        height: 45,
        lineHeight: 35,
        fontSize: 17,
        borderWidth: 0.5,
        borderColor: '#CCCCCC',
        backgroundColor: '#F7F7F7',
        padding: 8,
        flex: 1
    },
    inputContainer:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    icon:{
        width: 45,
        height: 45,
        marginLeft: 7,
        marginTop: 15,
        opacity: 0.5
    },
    tagsCloud:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    tag:{
        padding: 8,
        margin: 5,
        containerBackgroundColor: '#CCCCCC',
        fontSize: 15,
        borderRadius: 5,
        color: '#45525E'
    },
    buttonText: {
        fontSize: 18,
        color: '#45525E',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#BBBBBB',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    }
});




var Search = React.createClass({

    getInitialState: function getInitialState(){
        return({
            marginTop: 0,
            inputValue: '',
            hashtags: []
        })
    },

    componentDidMount: function componentWillMount(){
        Viewport.getDimensions((dim) => {
            this.state.marginTop = dim.height / 2.7;
            this.setState(this.state);
        })
    },

    componentDidUnmount: function componentWillMount(){
        this.state.marginTop = 0;
        this.setState(this.state);

    },

    goToTop: function goToTop() {
        var count = 0;
        var self = this;

        return (function easeInOut(count){
            requestAnimationFrame(() => {
                self.setState({ marginTop: self.state.marginTop - (1 + count) });
                if (self.state.marginTop > 30 && count < 20) return easeInOut(++count);
                if (self.state.marginTop > 30 && count >= 20) return easeInOut(--count)
            })
        })(count);
    },

    addTag: function addTag(){
        if(this.state.inputValue.length > 3){
            this.state.hashtags.push(this.state.inputValue);
            this.state.inputValue = '';
        }
        this.setState(this.state);
    },

    setInputValue: function setInputValue(text){
        this.setState({inputValue: text})
    },

    launchSearch: function launchSearch(){
        this.props.toRoute({
            component: ResultsPage,
            data: {name: 'results'}
        });
    },

    render: function render() {

        var tags = _.map(this.state.hashtags, (tag) =>{
            return <Text style={stylesBis.tag}>{tag}</Text>
        });

        if(this.state.marginTop > 0) {
            var input =  <TextInput
                onFocus={this.goToTop}
                onChangeText={this.setInputValue}
                value={this.state.inputValue}
                placeholder={'Enter keywords'}
                style={[stylesBis.input, {marginTop: this.state.marginTop}]}/>
        }
        if(this.state.marginTop < 30){
            var icon =
                <TouchableOpacity
                onPress={this.addTag}>
                    <Icon
                    name='ion|ios-plus-outline'
                    size={45}
                    color='#45525E'
                    style={stylesBis.icon}/>
                </TouchableOpacity>
        }
        if(this.state.hashtags.length > 0){
            var button =
                <TouchableHighlight
                    underlayColor='#CCCCCC'
                    style={stylesBis.button}
                    onPress={this.launchSearch}>
                    <Text style={stylesBis.buttonText}>Search</Text>
                </TouchableHighlight>
        }

        return (
            <View style={styles.container}>
                <View style={stylesBis.inputContainer}>
                    {input || null}
                    {icon || null}
                </View>
                {button || null}
                <View style={stylesBis.tagsCloud}>
                    {tags}
                </View>
            </View>


        );
    }
});



var firstRoute = {
    name: 'Search',
    component: Search
};

var SearchPage = React.createClass({
    render: function render() {
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={navigationStyle.header}
                backButtonComponent={BackButton}/>
        );
    }
});

module.exports = SearchPage;
