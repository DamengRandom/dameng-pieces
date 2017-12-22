import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebaseApp } from './services/firebase';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// redux store
import configureStore from './store/configureStore';
// routes
import Routes from './routes/routes';
// actions
import { startSetCosts } from './actions/costs';

const store = configureStore();

const Output = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

// ReactDOM.render(<p>Loading ..</p>, document.getElementById('root'));
// store.dispatch(startSetCosts()).then(() => {
  // ReactDOM.render(Output, document.getElementById('root'));  
// })

ReactDOM.render(Output, document.getElementById('root'));  

firebaseApp.auth().onAuthStateChanged((user) => {
  if(user){
    console.log("Logged in ..");
    if(user.email === 'damonwu0605@gmail.com') {
      store.dispatch(startSetCosts());
    }
  }else {
    console.log("Logged out ..");
  }
});

registerServiceWorker();
