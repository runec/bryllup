import * as types from './types';

console.warn(types);
export const refreshCurrentMoment = () => ({
  type: types.REFRESH_CURRENT_MOMENT,
  currentMoment: moment(),
});
