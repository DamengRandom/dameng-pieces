import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

// actions
import { addCost, startAddCost } from '../../actions/costs';

// components
import CostForm from './costForm';


const muiTheme = getMuiTheme({
  
});

class AddCost extends React.Component {
  onSubmit = (cost) => {
    this.props.startAddCost(cost);
    this.props.history.push('/costs');
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton label="Back to Cost"
            containerElement={<Link to="/costs" />}
            primary={true}>
          </RaisedButton>
          <CostForm onSubmit={this.onSubmit} />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddCost: (cost) => dispatch(startAddCost(cost)) // aynsc action to get the a new cost record
});

export default connect(undefined, mapDispatchToProps)(AddCost);