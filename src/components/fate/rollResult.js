import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
const muiTheme = getMuiTheme({
  resultLayout: {
    textAlign: 'right',
    paddingBottom: '24px'
  }, 
  resultData: {
    padding: '0px'
  },
  dialogButton: {
    // padding: '6px 0'
  }
});

class RollResult extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fateData: [],
      result: '',
      open: false
    }
  }
  componentWillMount(){
    this.renderResult();
  }
  renderResult(){
    let elementOccurence = (this.props.outputs)[0];
    this.state.fateData.push(elementOccurence);
    let maxOccuranceSet = [];
    let finalOutputIndex = null;
    for(let i = 0; i < elementOccurence.length; i++){
      maxOccuranceSet.push(elementOccurence.count(elementOccurence[i]));
      if(maxOccuranceSet[i] === Math.max(...maxOccuranceSet)){
        finalOutputIndex = i;
      }
    }
    this.setState(() => {
      return {
        rollCount: -1,
        outputs: [],
        result: `Congratulations, final fate result would be: ${elementOccurence[finalOutputIndex]} ..`
      }
    })
  }
  renderFateData() {
    if(this.state.fateData[0]){
      return this.state.fateData[0].map((fatedata, index) => {
        return <div key={index}>
          <ul>
            <li key={index}> {index+1}. Fate result is: { fatedata }</li>
          </ul>
        </div>
      })
    }
  }
  handleOpen = () => {
    this.setState(() => {
      return {
        open: true
      }
    })
  }
  handleClose = () => {
    this.setState(() => {
      return {
        open: false
      }
    })
  }
  render(){
    const closeAction = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={muiTheme.resultLayout}>
          <p style={muiTheme.resultData}>{ this.state.result }</p>
          <FlatButton primary={true} style={muiTheme.dialogButton} label="Each Rolling Result"
            onClick={this.handleOpen} />
          <Dialog title="List of every single rolling results" 
            actions={closeAction} 
            autoScrollBodyContent={true}
            modal={true}
            open={this.state.open}>
            <p>Bottom section listed every single rolling result, just make you believe this is fate random decision!</p>
            { this.renderFateData() }
            <br/>
            <p>Therefore, based on the <b>Majority Rule</b>: { this.state.result }</p>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default RollResult;