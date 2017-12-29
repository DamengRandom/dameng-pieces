import React from 'react';
import { connect } from 'react-redux';
import SignForm from './signForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

// actions
import { startLogin } from '../actions/auth';

const muiTheme = getMuiTheme({
  googleLogin: {
    textAlign: 'center'
  },
  h3: {
    position: 'relative',
    top: '-10pt'
  }
});

class Signin extends React.Component {
  googleSignIn = () => {
    this.props.startLogin();
    // console.log("login data: ", this.props.startLogin());
    this.props.history.push('/');
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <SignForm label="Sign In" history={this.props.history} />
          <div style={muiTheme.googleLogin}>
            <h3 style={muiTheme.h3}>Or</h3>
            <RaisedButton label="Login with Google" 
              primary={true}
              onClick={this.googleSignIn}>
            </RaisedButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Signin);