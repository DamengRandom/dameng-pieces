import { createStore, combineReducers } from 'redux';
import costReducer from '../reducers/costs';

export default () => {
  const store = createStore(
    combineReducers({
      costs: costReducer 
    })
  );
  return store;
}