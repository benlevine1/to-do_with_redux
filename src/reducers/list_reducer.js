import types from '../actions/types'

const DEFAULT_STATE = {
  all: [],
  single: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case types.GET_ALL_TO_DOS:
      console.log('GET ALL Action', action);
      return state;
    default:
      return state;
  }
}