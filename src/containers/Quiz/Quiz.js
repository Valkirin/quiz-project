import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'How color is a sky?',
        rightAnswer: 2,
        id: 1,
        answers: [
          { text: 'Grey', id: 1 },
          { text: 'Blue', id: 2 },
          { text: 'Green', id: 3 },
          { text: 'Red', id: 4 },
        ],
      },
      {
        question: 'How color your eyes?',
        rightAnswer: 3,
        id: 2,
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

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>PAEI test</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
