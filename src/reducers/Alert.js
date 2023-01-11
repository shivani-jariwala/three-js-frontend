export const defaultState = {
    open: false,
    severity: "error",
    message: "",
    duration: 3000,
    nextRoute: null,
  };
  
  export default function alert(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
      case "OPEN_ALERT":
        return Object.assign({}, state, {
          open: true,
          message: action.payload.message,
          severity: action.payload.severity,
          duration: action.payload.duration
            ? action.payload.duration
            : initialState.duration,
          nextRoute: action.payload.nextRoute ? action.payload.nextRoute : null,
        });
      case "CLOSE_ALERT":
        return Object.assign({}, state, {
          open: false,
        });
      default:
        return state;
    }
  }
  