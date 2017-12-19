import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

// components 
import CostForm from './costForm';
//actions
import { editCost, removeCost } from '../../actions/costs';

const muiTheme = getMuiTheme({
  
});

class EditCost extends React.Component {
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton label="Back to Cost"
            containerElement={<Link to="/costs" />}
            primary={true}>
          </RaisedButton>
          <RaisedButton icon={<FontIcon className="material-icons">delete</FontIcon>}
            style={muiTheme.costDetailButtons}
            primary={true}
            onClick={() => {
              this.props.dispatch(removeCost(this.props.match.params.id));
              this.props.history.push('/costs');
            }}>
          </RaisedButton>
          <CostForm onSubmit={(cost) => {
            this.props.dispatch(editCost(this.props.match.params.id, cost));
            this.props.history.push('/costs');
          }} cost={this.props.cost} />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cost: state.costs.find((cost) => {
      return cost.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditCost);

