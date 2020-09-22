import React, { Component } from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class QuizList extends Component {
  state = {
    quizes: [],
  };

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://quiz-project-60da6.firebaseio.com/quiz.json'
      );

      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `TEST №${index + 1}`,
        });
      });

      this.setState({
        quizes,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // componentDidMount() {
  //   axios
  //     .get('https://quiz-project-60da6.firebaseio.com/quiz.json')
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
