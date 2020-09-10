import React from 'react';
import classes from './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong> </strong>&nbsp;
        {props.answerNumber}
      </span>

      <small>
        {props.answerNumber} from {props.quizLength}
      </small>
    </p>

    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </div>
);

export default ActiveQuiz;
