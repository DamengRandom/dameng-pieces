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
    if(this.props.costs){
      return this.props.costs.map((cost) => {
        return <CostDetails key={cost.id} cost={cost} />
      })
    }
    else {
      return <p>No Cost For Now ..</p>
    }
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
        { this.renderCosts() }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    costs: state.costs
  }
}

export default connect(mapStateToProps)(Costs);
