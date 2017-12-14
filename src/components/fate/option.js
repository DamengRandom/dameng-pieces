import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Option extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { optionData, id } = this.props;
    return(
      <div key={id}>
        <span key={id}>R{id + 1}. {optionData}</span>
        <FlatButton label="Remove" secondary={true} onClick={ (e) => { this.props.removeSingleOption(optionData) }} />
      </div>
    )
  }
}

export default Option;