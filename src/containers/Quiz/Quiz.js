import React, { Component } from 'react'
import classes from '../Quiz/Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
import axios from '../../axios/axios-quiz'
import { connect } from 'react-redux'
import { fetchQuizById } from '../../store/actions/quiz'

export class Quiz extends Component {
  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const result = this.state.result
    if (question.rightAnswerId === answerId) {
      if (!result[question.id]) {
        result[question.id] = 'success'
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        result,
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      result[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        result,
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      result: {},
    })
  }

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>PAEI test</h1>

          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              result={this.props.result}
              quiz={this.props.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    result: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
