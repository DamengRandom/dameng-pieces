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
          <GridList style={muiTheme.gridList} cols={2.2}>
            <span>{ this.props.cost.costTitle }</span>
            <span>{ this.props.cost.costAmount }</span>
            <span>{ this.props.cost.costNote }</span>
            <span>{ this.props.cost.costDate }</span>
            <RaisedButton icon={<FontIcon className="material-icons">edit</FontIcon>}
              containerElement={<Link to="/edit-cost" />} 
              style={muiTheme.costDetailButtons}
              primary={true}>
            </RaisedButton>
            <RaisedButton icon={<FontIcon className="material-icons">delete</FontIcon>}
              style={muiTheme.costDetailButtons}
              primary={true}>
            </RaisedButton>
          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(CostDetails);

// <Table>
// <TableHeader>
//   <TableRow>
//     <TableHeaderColumn>Title</TableHeaderColumn>
//     <TableHeaderColumn>Amount</TableHeaderColumn>
//     <TableHeaderColumn>Note</TableHeaderColumn>
//     <TableHeaderColumn>Date</TableHeaderColumn>
//     <TableHeaderColumn>Actions</TableHeaderColumn>
//   </TableRow>
// </TableHeader>
// <TableBody>
//   <TableRow>
//     <TableRowColumn>{ this.props.cost.costTitle }</TableRowColumn>
//     <TableRowColumn>{ this.props.cost.costAmount }</TableRowColumn>
//     <TableRowColumn>{ this.props.cost.costNote }</TableRowColumn>
//     <TableRowColumn>{ this.props.cost.costDate }</TableRowColumn>
//     <TableRowColumn>
//       <RaisedButton icon={<FontIcon className="material-icons">last_page</FontIcon>}
//         containerElement={<Link to="/costs" />}
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//       <RaisedButton icon={<FontIcon className="material-icons">edit</FontIcon>}
//         containerElement={<Link to="/edit-cost" />} 
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//       <RaisedButton icon={<FontIcon className="material-icons">delete</FontIcon>}
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//     </TableRowColumn>
//   </TableRow>
// </TableBody>
// </Table>

// <table>
//   <tr>
//     <th>Title</th>
//     <th>Last Name</th>
//     <th>Note</th>
//     <th>Date</th>
//     <th>Actions</th>
//   </tr>
//   <tr>
//     <td>{ this.props.cost.costTitle }</td>
//     <td>{ this.props.cost.costAmount }</td>
//     <td>{ this.props.cost.costNote }</td>
//     <td>{ this.props.cost.costDate }</td>
//     <td>
//       <RaisedButton icon={<FontIcon className="material-icons">last_page</FontIcon>}
//         containerElement={<Link to="/costs" />}
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//       <RaisedButton icon={<FontIcon className="material-icons">edit</FontIcon>}
//         containerElement={<Link to="/edit-cost" />} 
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//       <RaisedButton icon={<FontIcon className="material-icons">delete</FontIcon>}
//         style={muiTheme.costDetailButtons}
//         primary={true}>
//       </RaisedButton>
//     </td>
//   </tr>
//   </table>