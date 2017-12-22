import React from 'react';
import { firebaseApp } from '../services/firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme({
  signContainer: {
    padding: "10% 2%"
  },
  signCard: {
    padding: "10% 2%"
  }
});

export default class SignForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  whichButton() {
    if(this.props.label === 'Sign In'){
      return (
        <RaisedButton label={this.props.label} 
        primary={true} 
        fullWidth={true}
        onClick={() => this.onSignIn()} />
      );
    }else if(this.props.label === 'Sign Up') {
      return (
        <RaisedButton label={this.props.label} 
        primary={true} 
        fullWidth={true}
        onClick={() => this.onSignUp()} />
      );
    }
  }
  onSignIn(){
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        return setTimeout(() => {
          this.props.history.push('/');
        }, 300); 
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert('The email address is invalid ..');
        } else if(errorCode == 'auth/user-not-found'){
          alert('user has not been found ..');
        }else {
          alert(errorMessage);
        }
        this.props.history.push('/signin');
        this.setState({ error });
      });
  }
  onSignUp(){
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        return setTimeout(() => {
          this.props.history.push('/');
        }, 300); 
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          alert('The email is already in use ..');
        } else {
          alert(errorMessage);
        }
        this.props.history.push('/signup');
        this.setState({ error });
      }); 
  }
  render(){
    return (
      <div style={muiTheme.signContainer}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Card style={muiTheme.signCard}>
            <CardHeader title={`${this.props.label} Here`}
              subtitle="Please fill this form .." />
            <CardActions>
              <TextField type="text" 
                hintText="Email: "   
                fullWidth={true} 
                onChange={(event) => this.setState({ email: event.target.value })} />
              <TextField type="password" 
                hintText="Password: " 
                fullWidth={true} 
                onChange={(event) => this.setState({ password: event.target.value })} />
            </CardActions>
            { this.whichButton() }
            <CardText>{ this.state.error.message }</CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}