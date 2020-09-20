import React, { Component } from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {
  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Authenticate</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input label='Email' />
            <Input label='Password' errorMessage='test' />

            <Button type={'success'} onClick={this.loginHandler}>
              Sign In
            </Button>

            <Button type={'primary'} onClick={this.registerHandler}>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
