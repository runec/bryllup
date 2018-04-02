import * as types from './types';

export const refreshCurrentMoment = () => ({
  type: types.REFRESH_CURRENT_MOMENT,
  currentMoment: moment(),
});

export const answerQ = (qNumber, answer) => ({
  type: types.ANSWER_Q,
  qNumber: qNumber,
  answer: answer,
});

export const showHint = () => ({
  type: types.SHOW_HINT,
});
