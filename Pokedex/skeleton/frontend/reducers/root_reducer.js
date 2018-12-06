import {combineReducer} from 'react-redux';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer
  // items: itemsReducer,
  // ui: uiReducer
});



export default rootReducer;
