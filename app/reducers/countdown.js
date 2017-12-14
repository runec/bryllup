import { REFRESH_CURRENT_MOMENT } from '../actions/types';

console.warn(REFRESH_CURRENT_MOMENT);
export const countdown = (state = {currentMoment: null}, action) => {
  switch(action.type) {
    case REFRESH_CURRENT_MOMENT:
      console.warn(action);
      return {
        currentMoment: action.currentMoment,
      };
    default:
      return state;
  }
};
