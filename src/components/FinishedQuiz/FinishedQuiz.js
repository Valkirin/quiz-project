import React from 'react';
import classes from './FinishedQuiz.css';

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          You are is
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>2.</strong>
          You are is
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>

      <p>Right 3 from 12</p>

      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
