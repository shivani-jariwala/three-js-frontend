export const defaultState = {
    userInfo: null,
    isAuthenticated: null,
    pending: true,
    loading: false,
    token: null,
  };
          
  export default function user(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
      case "REGISTRATION_START":
          return Object.assign({}, state, {
          pending: true,
        });
      case "REGISTRATION_END":
        return Object.assign({}, state, {
          pending: false,
        });
      case "LOGIN_START":
        return Object.assign({}, state, {
          pending: true,
        });
      case "LOGIN_SUCCESS":
        localStorage.setItem("token", action.payload.user.token);
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: true,
          userInfo: action.payload.user,
          token: action.payload.user.token,
        });
      case "LOGIN_FAILURE":
        localStorage.removeItem("token");
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: false,
          token: action.payload.user.token,
        });
      default:
        return state;
    }
  }
  