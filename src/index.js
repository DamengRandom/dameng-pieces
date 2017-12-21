import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebaseApp } from './services/firebase';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import redux store
import configureStore from './store/configureStore';
// import routes
import Routes from './routes/routes';
// import actions
import { startSetCosts } from './actions/costs';

const store = configureStore();

const Output = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

// ReactDOM.render(<p>Loading ..</p>, document.getElementById('root'));
// store.dispatch(startSetCosts()).then(() => {
  ReactDOM.render(Output, document.getElementById('root'));  
// })

firebaseApp.auth().onAuthStateChanged((user) => {
  if(user){
    console.log("Logged in ..");
  }else {
    console.log("Logged out ..");
  }
})

registerServiceWorker();
