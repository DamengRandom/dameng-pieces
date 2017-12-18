import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

// components 
import CostForm from './costForm';

const muiTheme = getMuiTheme({
  
});

class EditCost extends React.Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton label="Back to Cost"
            containerElement={<Link to="/costs" />}
            primary={true}>
          </RaisedButton>
          <CostForm />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default EditCost;