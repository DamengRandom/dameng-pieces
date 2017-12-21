import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import { firebaseApp } from '../../services/firebase';
import uuid from 'uuid';

class CostForm extends React.Component {
  constructor(props){
    super(props);
    console.log("cost read from store: ", props.cost);
    this.state = {
      costTitle: props.cost ? props.cost.costTitle : '',
      costAmount: props.cost ? props.cost.costAmount : 0,
      costNote: props.cost ? props.cost.costNote : '',
      costDate: props.cost ? moment(props.cost.costDate) : moment(),
    }
    this.getCostTitle = this.getCostTitle.bind(this);
    this.getCostAmount = this.getCostAmount.bind(this);
    this.getCostNote = this.getCostNote.bind(this);
    this.getCostDate = this.getCostDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  getCostTitle = (event) => {
    const costTitle = event.target.value;
    // this.setState({ costTitle });
    this.setState(() => {
      return {
        costTitle
      }
    })
  }
  getCostAmount = (event) => {
    const costAmount = event.target.value;
    this.setState({ costAmount });
  }
  getCostNote = (event) => {
    const costNote = event.target.value;
    this.setState({ costNote });
  }
  getCostDate = (event, date) => {
    const formattedDate = moment(date).format('L'); 
    this.setState({ costDate: date });
  }
  // add data into store (state management)
  onSubmit = (e) => {
    e.preventDefault();
    let costData = {
      costId: uuid(),
      costTitle: this.state.costTitle,
      costAmount: parseFloat(this.state.costAmount) ? parseFloat(this.state.costAmount) : parseFloat(this.state.costAmount),
      costNote: this.state.costNote,
      costDate: moment(this.state.costDate).format('L')
    }
    this.props.onSubmit(costData);
    // add data into firebase 
    // const firebaseCostsData = firebaseApp.database().ref('costs');
    // firebaseCostsData.push(costData);
  }
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <TextField type="text" 
          name="costTitle" 
          hintText="Please enter the cost title"
          onChange={this.getCostTitle}
          value={this.state.costTitle} />
        <br/>
        <TextField type="number" 
          name="costAmount" 
          hintText="Please enter the cost amount"
          onChange={this.getCostAmount}
          value={this.state.costAmount} />
        <br/>
        <TextField type="text" 
          multiLine={true} 
          rows={2} 
          rowsMax={8} 
          name="costNote" 
          hintText="Please enter the cost note"
          onChange={this.getCostNote}
          value={this.state.costNote} />
        <br/>
        <DatePicker hintText="Please choose when the cost was generated" 
          name="costDate" 
          onChange={this.getCostDate}
          value={this.state.costDate} />
        <br/>
        {
          !this.props.cost ? <RaisedButton label="Generate" type="submit" primary={true}></RaisedButton> : <RaisedButton label="Update" type="submit" primary={true}></RaisedButton>
        }
      </form>
    )
  }
}

export default CostForm;