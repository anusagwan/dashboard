const loginAction = {
  authUser: (email, password) => {
    return (dispatch) => {
      if (email === 'hruday@gmail.com' && password === 'hruday123') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: true,
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: false,
        });
      }
    };
  },
};

export default loginAction;
