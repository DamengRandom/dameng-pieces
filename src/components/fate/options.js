import React from 'react';

// components
import Option from './option';

const RollOptionList = {
  paddingBottom: '36px'
}

class Options extends React.Component {
  constructor(props){
    super(props);
  }
  renderOptionsData(){
    return this.props.optionsData.map((option, index) => {
      return (
        <Option key={index} 
          id={index} 
          optionData={option} 
          removeSingleOption={this.props.handleRemoveSingleOption} />
      )
    })
  }
  render(){
    return(
      <div style={RollOptionList}>
        <p><b>Rolling Options List</b></p>
        { this.renderOptionsData() }
      </div>
    )
  }
}

export default Options;