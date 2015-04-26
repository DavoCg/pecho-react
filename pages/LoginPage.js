'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var t = require('tcomb-form-native');
var styles = require('./../styles/pechoStyle').login;


var Form = t.form.Form;
var User = t.struct({
    nickname: t.Str
});
var options = {
    auto: 'none',
    fields: {
        nickname: {
            placeholder: 'Pick up a nickname'
        }
    }
};

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    AsyncStorage
    } = React;

var Login = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            loading: false
        })
    },

    _login: function _login(){
        var value = this.refs.form.getValue();
        var self = this;
        if(value){
            this.setState({loading: true});
            setTimeout(function (){
                self.setState({loading: false});
                self.props.onLogged(value.nickname)
            }, 2000);
        }
    },
    _checkAvailabily: function _checkAvailabily(form){
        console.log(form.nickname);
    },

    render: function render() {
        var loader = this.state.loading ? 'loading' : '';
        return (
            <View style={styles.container}>
                <Image source={require('image!logo_placeholder')} style={styles.logo}/>
                <View style={styles.formContainer}>
                    <Form
                        ref="form"
                        type={User}
                        options={options}
                        onChange={this._checkAvailabily}
                    />
                    <TouchableHighlight style={styles.button} onPress={this._login} underlayColor='#48D583'>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableHighlight>
                   <Text>{loader}</Text>
                </View>
            </View>
        );
    }
});

module.exports = Login;