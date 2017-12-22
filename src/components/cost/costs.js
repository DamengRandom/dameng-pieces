import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
// components
import CostDetails from './costDetails';

const muiTheme = getMuiTheme({
  rootLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 'auto',
    overflowY: 'auto',
  }
});

class Costs extends React.Component {
  constructor(props){
    super(props);
  }
  renderCosts(){
    if(this.props.costs.length !== 0){
      return this.props.costs.map((cost) => { // render each of cost record 
        return <CostDetails key={cost.costId} cost={cost} />
      });
    }else {
      return <p>No Cost Record For Now ..</p>
    }
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={muiTheme.rootLayout}>
          <GridList
          cols={1}
          cellHeight={'auto'}
          padding={1}
          style={muiTheme.gridList}>
            <GridTile>
              <h4>Cost Headaches</h4>
              <RaisedButton label="Add New Cost"
                containerElement={<Link to="/add-cost" />}
                primary={true}>
              </RaisedButton>
              { this.renderCosts() }
            </GridTile>
          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    costs: state.costs // retrieve all the costs data from store
  }
}

export default connect(mapStateToProps)(Costs);
