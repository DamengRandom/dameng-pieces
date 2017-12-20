import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import { Router, Route } from 'react-router-dom'; 
import createBrowserHistory from 'history/createBrowserHistory';
// import components
import Navbar from '../components/navbar';
// import App from '../App';
import Core from '../components/core';
import Costs from '../components/cost/costs';
import AddCost from '../components/cost/addCost';
import EditCost from '../components/cost/editCost';
import CostDetails from '../components/cost/costDetails';
import Fate from '../components/fate/fate';
import Signin from '../components/signin';
import Signup from '../components/signup';
import Words from '../components/words';
const history = createBrowserHistory();
class Routes extends React.Component {
  render(){
    return (
      <Router path="/" history={history}>
        <div>
          <Navbar />
          <Route exact path="/" component={Core} history={history}></Route>
          <Route exact path="/fate" component={Fate} history={history}></Route>
          <Route exact path="/costs" component={Costs} history={history}></Route>
          <Route exact path="/signin" component={Signin} history={history}></Route>
          <Route exact path="/signup" component={Signup} history={history}></Route>
          <Route exact path="/words" component={Words} history={history}></Route>
          <Route exact path="/add-cost" component={AddCost} history={history}></Route>
          <Route exact path="/edit-cost/:id" component={EditCost} history={history}></Route>
          <Route exact path="/cost-details/:id" component={CostDetails} history={history}></Route>
        </div>
      </Router>
    );
  }
}
export default Routes;