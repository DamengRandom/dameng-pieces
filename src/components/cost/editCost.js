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
import { startEditCost, startRemoveCost } from '../../actions/costs';

const muiTheme = getMuiTheme({
  
});

class EditCost extends React.Component {
  constructor(props){
    super(props);
    
  }
  onRemove = () => {
    this.props.startRemoveCost({id: this.props.match.params.id});
    this.props.history.push('/costs');
  }
  onUpdate = (cost) => {
    this.props.startEditCost(this.props.match.params.id, cost);
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
          <RaisedButton icon={<FontIcon className="material-icons">delete</FontIcon>}
            style={muiTheme.costDetailButtons}
            primary={true}
            onClick={this.onRemove}>
          </RaisedButton>
          <CostForm onSubmit={this.onUpdate} cost={this.props.cost} />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cost: state.costs.find((cost) => {
      return cost.id === props.match.params.id // find the data inside store which id is same with url id value 
    })
  }
}

const mapDispatchToProps = (dispatch, props) => { // aynsc actions to trigger state change and send updated data to store
  return {  
    startEditCost: (id, data) => dispatch(startEditCost(id, data)),
    startRemoveCost: (data) => dispatch(startRemoveCost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCost);

