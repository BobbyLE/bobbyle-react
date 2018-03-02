const workReducerDefaultState = [];

export default (state = workReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_WORK':
      return [
        ...state,
        action.work
      ];
    case 'EDIT_WORK':
      return state.map((work) => {
        if(work.id === work.id) {
          return {
            ...work,
            ...action.updates
          }
        } else {
          return work;
        };
      });
    case 'REMOVE_WORK':
      return state.filter(({id}) => id != action.id);
    case 'SET_WORKS':
      return action.works;
    default:
      return state;
  }
}