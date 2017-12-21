import uuid from 'uuid';
import { firebaseApp } from '../services/firebase';

export const addCost = (cost) => {
  return {
    type: 'ADD_COST',
    cost
  }
}

// keep adding new costs into the store constantly (startAddCost: is called as action function)
export const startAddCost = (costData = {}) => {
  return (dispatch) => {
    const {
      costId = null,
      costTitle = null, 
      costAmount = 0,
      costNote = null,
      costDate = null
    } = costData;
    const eachCost = { costId: uuid(), costTitle, costAmount, costNote, costDate }
    firebaseApp.database().ref('costs').push(eachCost).then((snapshot) => {
      dispatch(addCost({
        id: snapshot.key,
        ...eachCost
      }));
    });
  }
}

// edit cost data
export const editCost = (id, updates) => {
  return {
    type: 'EDIT_COST',
    id,
    updates
  }
}

export const startEditCost = (id, updates) => {
  return (dispatch) => {
    return firebaseApp.database().ref(`costs/${id}`).update(updates).then(() => {
      dispatch(editCost(id, updates));
    })
  }
}

// remove specific cost data
export const removeCost = ({id} = {}) => {
  return {
    type: 'REMOVE_COST',
    id
  }
}

export const startRemoveCost = ({id} = {}) => {
  return (dispatch) => {
    return firebaseApp.database().ref(`costs/${id}`).remove().then(() => {
      dispatch(removeCost({id}))
    })
  }
}

// load all costs data from store
export const setCosts = (costs) => {
  return {
    type: 'SET_COSTS',
    costs
  }
}

export const startSetCosts = () => {
  return (dispatch) => {
    return firebaseApp.database().ref('costs').once('value').then((snapshot) => {
      const costs = [];
      snapshot.forEach((childSnapshot) => {
        costs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setCosts(costs));
    });
  }
}
