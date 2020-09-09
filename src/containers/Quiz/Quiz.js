import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    quiz: [],
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}

export default Quiz;
