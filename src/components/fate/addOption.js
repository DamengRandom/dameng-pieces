import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// styles
const addOptionFormStyle = {
  padding: 12,
  paddingLeft: 0
}

const addOptionFormButtonStyle = {
  margin: 12
};

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    const inputOption = event.target.option.value;
    const error = this.props.handleAddOption(inputOption);
    if(error){
      this.setState(() => {
        return {
          error
        }
      })
    }else {
      this.setState(() => {
        return {
          error: null
        }
      })
    }
    event.target.option.value = '';
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit} style={addOptionFormStyle}>
          <TextField type="text" name="option" hintText="Please enter a new option" />
          <RaisedButton type="submit" label="Add Option" primary = { true } style = { addOptionFormButtonStyle } />
          { this.state.error && <p>{ this.state.error }</p> }
        </form>
      </div>
    );
  }
}

export default AddOption;