import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { countdown } from './countdown';


const rootReducer = combineReducers({
  countdown,
  routing,
});

export default rootReducer;
