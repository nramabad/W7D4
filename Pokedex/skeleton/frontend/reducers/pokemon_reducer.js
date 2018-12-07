import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon);
    case RECEIVE_ONE_POKEMON: 
      return Object.assign({}, state, action.payload.pokemon);
    default:
      return state;
  }
};



export default pokemonReducer;
