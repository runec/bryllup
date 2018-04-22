import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { countdown } from './countdown';
import { q } from './q';
import { tilmeld } from './tilmeld';


const rootReducer = combineReducers({
  countdown,
  q,
  tilmeld,
  routing,
});

export default rootReducer;
