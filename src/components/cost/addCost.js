import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

// actions
import { addCost } from '../../actions/costs';

// components
import CostForm from './costForm';


const muiTheme = getMuiTheme({
  
});

class AddCost extends React.Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton label="Back to Cost"
            containerElement={<Link to="/costs" />}
            primary={true}>
          </RaisedButton>
          <CostForm onSubmit={(cost) => {
            this.props.dispatch(addCost(cost));
            console.log('cost: ', cost);
            this.props.history.push('/costs');
          }} />  
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(AddCost);