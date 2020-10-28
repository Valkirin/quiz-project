import styled from 'styled-components';

export const ButtonStyles = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #000;
  margin-right: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;

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

  .success {
    background: rgba(161, 240, 69, 1);
  }

  .error {
    background: rgba(240, 87, 108, 1);
  }

  .primary {
    background: #2884f6;
    color: #fff;
  }
`;
// .Button {
// display: inline-block;
// padding: 10px 20px;
// border-radius: 4px;
// border: 1px solid #ccc;
// color: #000;
// margin-right: 5px;
// text-transform: uppercase;
// font-weight: bold;
// font-size: 12px;
// }

// .Button:focus {
//   outline: none;
// }

// .Button:active {
//   box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
// }

// .Button:disabled {
//   background: #cccccc;
//   color: #000;
//   cursor: not-allowed;
// }

// .success {
//   background: rgba(161, 240, 69, 1);
// }

// .error {
//   background: rgba(240, 87, 108, 1);
// }

// .primary {
//   background: #2884f6;
//   color: #fff;
// }
