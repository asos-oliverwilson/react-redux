/* takes current state and and action to perform on that state
and then returns a new state object. */
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  } 
}
