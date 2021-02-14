
const initialState = {
 isLoggedIn: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
      };
    case 'LOGIN_SUCCESS':
      return {
       isLoggedIn: action.payload
      };
    case 'LOGIN_FAILURE':
      return {
       isLoggedIn: action.payload
      };
    default:
      return {
        ...state,
      };
  }
}
