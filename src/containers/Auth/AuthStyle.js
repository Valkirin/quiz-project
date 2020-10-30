import styled from 'styled-components';

export const AuthStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
  background: linear-gradient(270deg, #cef2fa 0%, #59bfef 100%);

  div {
    width: 100%;
    max-width: 600px;
    padding: 0px 20px;

    form {
      background: #eee;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      padding: 15px;
      border-radius: 5px;
    }
  }

  h1 {
    color: #fff;
    text-align: center;
  }
`;

// .Auth {
// display: flex;
// justify-content: center;
// padding-top: 100px;
// flex-grow: 1;
// width: 100%;
// background: linear-gradient(270deg, #cef2fa 0%, #59bfef 100%);
// }

// .Auth > div {
//   width: 100%;
//   max-width: 600px;
//   padding: 0px 20px;
// }

// .Auth h1 {
//   color: #fff;
//   text-align: center;
// }

// .AuthForm {
//   background: #eee;
//   box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
//   padding: 15px;
//   border-radius: 5px;
// }