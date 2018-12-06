import {combineReducer} from 'react-redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
  // items: itemsReducer,
  // ui: uiReducer
});



export default entitiesReducer;
