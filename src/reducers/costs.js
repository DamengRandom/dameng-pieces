const costDefaultState = [];
export default (state = costDefaultState, action) => {
  switch(action.type){
    case 'ADD_COST':
      // return [...state, action.cost];
      return state.concat(action.cost);
    case 'EDIT_COST':
      return state.map((cost) => {
        if(cost.id === action.id){
          return {
            ...cost,
            ...action.updates
          }
        }else {
          return cost;
        }
      });
    case 'REMOVE_COST':
      return state.filter(({id}) => id !== action.id);
    default: 
      return state;
  }
}