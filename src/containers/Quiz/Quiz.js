import React, { Component } from 'react';
import classes from '../Quiz/Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export class Quiz extends Component {
  //dynamical content
  state = {
    result: {}, //{[id]: success error}
    isFinished: false,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const result = this.state.result;
    if (question.rightAnswerId === answerID) {
      if (!result[question.id]) {
        result[question.id] = 'success';
      }
      this.setState({
        answerState: { [answerID]: 'success' },
        result,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      result[question.id] = 'error';
      this.setState({
        answerState: { [answerID]: 'error' },
        result,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      result: {},
    });
  };

  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>PAEI test</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              result={this.state.result}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
