import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// styles 
const rollFormStyle = {
  padding: 12,
  paddingLeft: 0
}

const rollFormButtonStyle = {
  margin: 12
};

class Rolls extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: null
    }
  }
  onSubmit(event){
    event.preventDefault();
    const rollTimesCount = Math.floor(event.target.rolls.value);
    if(rollTimesCount && rollTimesCount > 0 && rollTimesCount < 100){
      this.setState(() => {
        return {
          error: null
        }
      });
      event.target.rolls.value = null;
      return this.props.rollCount(rollTimesCount);
    }else {
      this.setState(() => {
        return {
          error: "Oops, please enter a less than 100 positive integer value .."
        }
      })
      event.target.rolls.value = null;
    }
  }
  render(){
    return (
      <div>
        <form onSubmit = {this.onSubmit} style = { rollFormStyle }>
          <TextField type="number" name="rolls" hintText="Number of times for rolling" />
          <RaisedButton type="submit" label="Enter" primary = { true } style = { rollFormButtonStyle } />
          { this.state.error && <p>{ this.state.error }</p> }
        </form>
      </div>
    );
  }
}

export default Rolls;