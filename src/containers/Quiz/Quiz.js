import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    quiz: [
      {
        question: 'How color your eyes?',
        rightAnswer: 2,
        answers: [
          { text: 'Grey', id: 1 },
          { text: 'Blue', id: 2 },
          { text: 'Green', id: 3 },
          { text: 'Red', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerID) => {
    console.log('Answer ID', answerID);
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>PAEI test</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
