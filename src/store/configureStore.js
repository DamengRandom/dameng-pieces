import { createStore, combineReducers, applyMiddleware } from 'redux';
import costReducer from '../reducers/costs';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      costs: costReducer 
    }),
    applyMiddleware(thunk) // apply middleware for writing aynsc actions to get the latest state
  );
  return store;
}