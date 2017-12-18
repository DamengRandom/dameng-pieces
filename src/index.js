import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import redux store
import configureStore from './store/configureStore';
// import routes
import Routes from './routes/routes';

const store = configureStore();

const Output = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(Output, document.getElementById('root'));

registerServiceWorker();
