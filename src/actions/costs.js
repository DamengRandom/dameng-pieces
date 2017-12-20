import uuid from 'uuid';

export const addCost = ({ 
    costId = null,
    costTitle = null, 
    costAmount = 0,
    costNote = null,
    costDate = null
  } = {}) => {
    return {
      type: 'ADD_COST',
      cost: {
        id: uuid(),
        costId: uuid(),
        costTitle, 
        costAmount,
        costNote,
        costDate
      }
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
