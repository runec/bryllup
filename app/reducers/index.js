import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { countdown } from './countdown';
import { q } from './q';


const rootReducer = combineReducers({
  countdown,
  q,
  routing,
});

export default rootReducer;
