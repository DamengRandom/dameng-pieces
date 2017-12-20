import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const muiTheme = getMuiTheme({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  costDetailButtons: {
    margin: "0 4pt"
  }
});

class CostDetails extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log("data: ", this.props);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={muiTheme.root}>
          <span>{ this.props.cost.costTitle }</span>
          <span>{ this.props.cost.costAmount }</span>
          <span>{ this.props.cost.costNote }</span>
          <span>{ this.props.cost.costDate }</span>
          <RaisedButton icon={<FontIcon className="material-icons">edit</FontIcon>}
            containerElement={<Link to={"/edit-cost/"+this.props.cost.costId} />} 
            style={muiTheme.costDetailButtons}
            primary={true}>
          </RaisedButton>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(CostDetails);
