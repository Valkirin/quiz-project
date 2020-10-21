import {
  CREATE_QUIZ_QUESTION,
  RESET_QUIZ_CREATION,
  GOTO_QUIZ,
} from '../actions/actionTypes';

const initialState = {
  quiz: [],
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_QUIZ_QUESTION:
      return {
        ...state,
        quiz: [...state.quiz, action.item],
      };
    case RESET_QUIZ_CREATION:
      return {
        ...state,
        quiz: [],
      };
    case GOTO_QUIZ:
      return {
        ...state,
      };
    default:
      return state;
  }
}
