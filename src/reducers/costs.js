const costDefaultState = [];
export default (state = costDefaultState, action) => {
  switch(action.type){
    case 'ADD_COST':
      // return [...state, action.cost]; // second way to put action into state
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
      return state.filter(({id}) => id !== action.id); // filter means remove the one which id is same with action id
    case 'SET_COSTS':
      return action.costs
    default: 
      return state;
  }
}