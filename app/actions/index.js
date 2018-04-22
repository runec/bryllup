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

export const tilmeld = (names, allergies, musicChoices, attendingBrunch) => ({
  type: types.TILMELD,
  names: names,
  allergies: allergies,
  musicChoices: musicChoices,
  attendingBrunch: attendingBrunch,
});

export const tilmeldSucceeded = () => ({
  type: types.TILMELD_SUCCESS,
});

export const tilmeldFailed = () => ({
  type: types.TILMELD_FAILURE,
});

export const tilmeldSent = () => ({
  type: types.TILMELD_SENT,
});
