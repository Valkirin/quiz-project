import React from 'react';
import styled from 'styled-components';

const theme = {
  buttonPrimaryColor: '#2884f6',
  buttonSuccessColor: 'rgba(161, 240, 69, 1)',
  buttonErrorColor: 'rgba(240, 87, 108, 1)',
};

const ButtonStyles = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: ${(props) => (props.type === 'primary' ? '#fff' : '#000')};
  margin-right: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background: ${(props) => {
    if (props.type === 'primary') return theme.buttonPrimaryColor;
    if (props.type === 'success') return theme.buttonSuccessColor;
    if (props.type === 'error') return theme.buttonWarningColor;
  }};

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #cccccc;
    color: #000;
    cursor: not-allowed;
  }
`;

const Button = (props) => {
  return (
    // <ThemeProvider theme={theme}>
    <ButtonStyles
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyles>
    // </ThemeProvider>
  );
};

export default Button;
