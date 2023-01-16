/* Redux actions are defined here
function action(payload) {
  return {
    type: 'ACTION_NAME',
    payload,
  };
}
*/

export function showError(errorTitle, errorDesc) {
  return {
    type: "SHOW_ERROR",
    payload: {
      hasError: true,
      errorTitle,
      errorDesc,
    },
  };
}

export function hideError() {
  return {
    type: "HIDE_ERROR",
    payload: null,
  };
}

export function registrationStart() {
    return {
      type: "REGISTRATION_START",
      payload: null,
    };
  }
  
  export function registrationEnd() {
    return {
      type: "REGISTRATION_END",
      payload: null,
    };
  }
  
  export function loginStart() {
    return {
      type: "LOGIN_START",
      payload: null,
    };
  }
  
  export function loginSuccess(info) {
    return {
      type: "LOGIN_SUCCESS",
      payload: {
          info
      },
    };
  }
  
  export function loginFailure() {
    return {
      type: "LOGIN_FAILURE",
      payload: null,
    };
  }
  
  export function setLoading(info) {
    return {
      type: "SET_LOADING",
      payload: info,
    };
  }

  export function openAlert(info) {
    return {
      type: "OPEN_ALERT",
      payload: info,
    };
  }

  export function closeAlert(info) {
    return {
      type: "CLOSE_ALERT",
      payload: info,
    };
  }
   