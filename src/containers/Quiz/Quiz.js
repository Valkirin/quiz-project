import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';

export class Quiz extends Component {
  //dynamical content
  state = {
    quiz: [],
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
      </div>
    );
  }
}

export default Quiz;
