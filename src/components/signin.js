import React from 'react';
import SignForm from './signForm';
export default class Signin extends React.Component {
  render(){
    return (
      <div>
        <SignForm label="Sign In" history={this.props.history} />
      </div>
    );
  }
}