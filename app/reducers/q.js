import { ANSWER_Q, SHOW_HINT } from '../actions/types';

const correctAnswers = ['18-1-20-15', 'rune elsker tanja', true, 'ren slipsenål lånes pilsner'];
const hintTexts = [
  'Se på juletræet!',
  'Fandt du papiret i bogen? Klip papiret over på den lange led!',
  'Du ved det jo godt',
  'Tænk krydsordsrebus. Hvad forestiller første billede, og hvad får du, hvis du læser ordene baglæns?',
];

const HINT_LIMIT = 2;

export const q = (state = {currentQ: 1, wrongGuesses: 0, hintText: '', showQHint: false}, action) => {
  switch(action.type) {
    case ANSWER_Q:
      if(action.answer === correctAnswers[action.qNumber - 1]) {
        return {
          currentQ: state.currentQ + 1,
          wrongGuesses: 0,
          hintText: '',
          showQHint: false,
        };
      } else {
        if(state.wrongGuesses >= HINT_LIMIT) {
          return {
            currentQ: state.currentQ,
            wrongGuesses: state.wrongGuesses + 1,
            hintText: hintTexts[state.currentQ - 1],
            showQHint: state.showQHint,
          };
        } else {
          return {
            currentQ: state.currentQ,
            wrongGuesses: state.wrongGuesses + 1,
            hintText: '',
            showQHint: false,
          };
        }
      }
    case SHOW_HINT:
      return {
        ...state,
        showQHint: true,
      };

    default:
      return state;
  }
};
