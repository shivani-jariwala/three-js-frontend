export const defaultState = {
    appError: {
      hasError: false,
      errorTitle: 'Something went wrong',
      errorDesc: 'Check your internet connection and try again',
    },
  };
  
  export default function app(state = defaultState, action) {
    switch (action.type) {
      case 'SHOW_ERROR': {
        return Object.assign({}, state, {
          appError: {
            hasError: true,
            errorTitle: action.payload.errorTitle,
            errorDesc: action.payload.errorDesc,
          },
        });
      }
      case 'HIDE_ERROR': {
        return Object.assign({}, state, {
          appError: {
            hasError: false,
            errorTitle: 'Something went wrong',
            errorDesc: 'Check your internet connection and try again',
          },
        });
      }
      default:
        return state;
    }
  }
  