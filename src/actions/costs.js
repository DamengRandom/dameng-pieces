import uuid from 'uuid';
import { firebaseApp } from '../services/firebase';

// export const addCost = ({ 
//     costId = null,
//     costTitle = null, 
//     costAmount = 0,
//     costNote = null,
//     costDate = null
//   } = {}) => {
//     return {
//       type: 'ADD_COST',
//       cost: {
//         id: uuid(),
//         costId: uuid(),
//         costTitle, 
//         costAmount,
//         costNote,
//         costDate
//       }
//     }
// }

export const addCost = (cost) => {
  return {
    type: 'ADD_COST',
    cost
  }
}

// keep adding new costs into the store constantly
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
    firebaseApp.database().ref('costs').push(eachCost).then(() => {
      dispatch(addCost({
        ...eachCost
      }));
    });
  }
}

export const editCost = (id, updates) => {
  return {
    type: 'EDIT_COST',
    id,
    updates
  }
}

export const removeCost = (id) => {
  return {
    type: 'REMOVE_COST',
    id
  }
}

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
        costs.push(childSnapshot.val())
      });
      console.log("costs: ", costs);
      dispatch(setCosts(costs));
    });
  }
}
