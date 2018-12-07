import { RECEIVE_ONE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      return Object.assign({}, state, action.payload.items);
    default:
      return state;
  }
};

export default itemsReducer;