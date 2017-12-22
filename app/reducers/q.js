import { ANSWER_Q } from '../actions/types';

const correctAnswers = [1, 2, 3];
const hintTexts = [
  'hint1',
  'hint2',
  'hint3'
];

const HINT_LIMIT = 3;

export const q = (state = {qurrentQ: 1, wrongGuesses: 0, hintText: ''}, action) => {
  switch(action.type) {
    case ANSWER_Q:
      if(action.answer === correctAnswers[action.qNumber]) {
        return {
          qurrentQ: state.qurrentQ + 1,
          wrongGuesses: 0,
          hintText: '',
        };
      } else {
        if(state.wrongGuesses >= HINT_LIMIT) {
          return {
            qurrentQ: state.currentQ,
            wrongGuesses: state.wrongGuesses + 1,
            hintText: hintTexts[state.currentQ],
          };
        } else {
          return {
            qurrentQ: state.currentQ,
            wrongGuesses: state.wrongGuesses + 1,
            hintText: hintTexts[state.currentQ],
          };
        }
      }
    default:
      return state;
  }
};
