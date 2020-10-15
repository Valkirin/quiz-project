export function auth(email, password, isLogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy6IYvc0nR09uASnHmeK1yIxG1qd6GpTE';

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy6IYvc0nR09uASnHmeK1yIxG1qd6GpTE';
    }

    const response = await axios.post(url, authData);
  };
}
