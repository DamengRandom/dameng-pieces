import { createStore, combineReducers, applyMiddleware } from 'redux';
import costReducer from '../reducers/costs';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      costs: costReducer 
    }),
    applyMiddleware(thunk)
  );
  return store;
}