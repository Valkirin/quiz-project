import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionTypes';
import axios from '../../axios/axios-quiz';
import { alertService } from '../../components/UI/Alert/alert.service';

export function createQuizQuestion(item) {
  alertService.success('QUESTION ADDED', { autoClose: true });
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

export function finishCreateQuiz(history) {
  return async (dispatch, getState) => {
    const newQuiz = await axios.post('/quiz.json', getState().create.quiz);
    alertService.success('QUIZ CREATED SUCCESSFULLY', { autoClose: true });

    // window.location.href = newQuiz;
    const timeOutCallBack = () => {
      history.push(`/quiz/${newQuiz.data.name}`);
    };

    setTimeout(timeOutCallBack, 3000);

    dispatch(resetQuizCreation());
  };
}
