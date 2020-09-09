import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    quiz: [
      {
        answers: [
          { text: 'Answer 1' },
          { text: 'Answer 2' },
          { text: 'Answer 3' },
          { text: 'Answer 4' },
        ],
      },
    ],
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>PAEI test</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
