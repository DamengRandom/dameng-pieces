import React from 'react';
import { Link } from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
// components
import AddCost from './addCost';
import CostDetails from './costDetails';

const muiTheme = getMuiTheme({

});

class Costs extends React.Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h4>Cost Headaches</h4>
          <RaisedButton label="Add New Cost"
            containerElement={<Link to="/addcost" />}
            primary={true}>
          </RaisedButton>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Costs;