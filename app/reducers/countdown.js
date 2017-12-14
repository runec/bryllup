import { REFRESH_CURRENT_MOMENT } from '../actions/types';

export const countdown = (state = {currentMoment: null}, action) => {
  switch(action.type) {
    case REFRESH_CURRENT_MOMENT:
      return {
        currentMoment: action.currentMoment,
      };
    default:
      return state;
  }
};
