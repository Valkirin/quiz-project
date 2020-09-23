import React, { Component } from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';

export default class QuizList extends Component {
  state = {
    quiz: [],
    loading: true,
  };

  renderQuizes() {
    return this.state.quiz.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quiz.json');

      const quiz = [];

      Object.keys(response.data).forEach((key, index) => {
        quiz.push({
          id: key,
          name: `TEST №${index + 1}`,
        });
      });

      this.setState({
        quiz,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>

          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}
