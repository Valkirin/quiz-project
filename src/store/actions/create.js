import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionTypes';
import axios from '../../axios/axios-quiz';
import { alertService } from '../../components/UI/Alert/alert.service';

export function createQuizQuestion(item) {
  alertService.success('QUESTION CREATED', { autoClose: true });
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION,
  };
}

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post('/quiz.json', getState().create.quiz);
    alertService.success('QUIZ CREATED', { autoClose: true });
    dispatch(resetQuizCreation());
  };
}
