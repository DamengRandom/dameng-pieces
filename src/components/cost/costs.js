import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
// components
import CostDetails from './costDetails';

const muiTheme = getMuiTheme({

});

class Costs extends React.Component {
  constructor(props){
    super(props);
  }
  renderCosts(){
    return this.props.costs.map((cost) => { // render each of cost record 
      return <CostDetails key={cost.costId} cost={cost} />
    })
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h4>Cost Headaches</h4>
          <RaisedButton label="Add New Cost"
            containerElement={<Link to="/add-cost" />}
            primary={true}>
          </RaisedButton>
        { this.props.costs.length !== 0 ? this.renderCosts() : <p>No Cost Record For Now ..</p> }
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
