import React from 'react';
import SignForm from './signForm';
export default class Signup extends React.Component {
  render(){
    return (
      <div>
        <SignForm label="Sign Up" history={this.props.history} />
      </div>
    );
  }
}