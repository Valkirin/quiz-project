import React from 'react';
import { ButtonStyles } from './ButtonStyles.js';

const Button = (props) => {
  const cls = [ButtonStyles, ButtonStyles[props.type]];

  return (
    <ButtonStyles
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyles>
  );
};

export default Button;
