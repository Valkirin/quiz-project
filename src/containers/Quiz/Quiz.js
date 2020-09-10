import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    activeQuestion: 0,
    answerState: null, //{[id]: 'success' 'error'}

    quiz: [
      {
        question: 'How color is a sky?',
        rightAnswerId: 2,
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
        rightAnswerId: 3,
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
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerID) {
      this.setState({
        answerState: { [answerID]: 'success' },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Fin');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerID]: 'error' },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

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
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
