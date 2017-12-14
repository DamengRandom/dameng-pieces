import React from 'react';
import { firebaseApp } from '../services/firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
      .catch((error) => {
        this.setState({ error });
      });
    return setTimeout(() => {
      this.props.history.push('/');
    }, 300); 
  }
  onSignUp(){
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({ error });
      });
    return setTimeout(() => {
      this.props.history.push('/');
    }, 300); 
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