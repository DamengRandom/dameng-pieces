import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

class CostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      costTitle: props.costTitle || '',
      costAmount: props.costAmount || 0,
      costNote: props.costNote || '',
      costDate: moment(props.costDate) || moment()
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
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      costTitle: this.state.costTitle,
      costAmount: parseInt(this.state.costAmount),
      costNote: this.state.costNote,
      costDate: moment(this.state.costDate).format('L')
    });
    // const data = {
    //   costTitle: this.state.costTitle,
    //   costAmount: parseInt(this.state.costAmount),
    //   costNote: this.state.costNote,
    //   costDate: moment(this.state.costDate).format('L')
    // }
    // console.log("received data", data);
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
        <RaisedButton label="Generate" type="submit"
          primary={true}>
        </RaisedButton>
      </form>
    )
  }
}

export default CostForm;