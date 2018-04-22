import { TILMELD_SUCCESS, TILMELD_FAILURE, TILMELD_SENT } from '../actions/types';

const defaultState = {
  tilmeldStatus: 'NOT_SENT',
};

export const tilmeld = (state = defaultState, action) => {
  switch(action.type) {
    case TILMELD_SENT:
      return {
        tilmeldStatus: 'PENDING',
      };
    case TILMELD_SUCCESS:
      return {
        tilmeldStatus: 'SUCCESS',
      };
    case TILMELD_FAILURE:
      return {
        tilmeldStatus: 'FAILURE',
      };
    default:
      return state;
  }
};
