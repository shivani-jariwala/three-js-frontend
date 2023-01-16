import { store } from '../store/Index';

export const showError = (err) => {
  let errorTitle = 'Something went wrong';
  let errorDesc =
    'We were unable to fulfill your request. Please try again later.';
  if (err.response && err.response.data && err.response.data.errorMessage) {
    errorDesc = err.response.data.errorMessage;
  } else if (err && err.data && err.data.errorMessage) {
    errorDesc = err.data.errorMessage;
  } else if(err && err.message){
    errorDesc = err.message
  }

  if (err.response && err.response.data && err.response.data.debugMessage) {
    errorTitle = err.response.data.debugMessage;
  } else if (err && err.data && err.data.debugMessage) {
    errorTitle = err.data.debugMessage;
  }

  console.log({ err, errorTitle, errorDesc });

  // store.dispatch({
  //   type: 'SHOW_ERROR',
  //   payload: {
  //     errorTitle: errorTitle,
  //     errorDesc: errorDesc,
  //   },
  // });

  store.dispatch({
    type: 'OPEN_ALERT',
    payload: {
      // errorTitle: errorTitle,
      message: errorDesc
    },
  });
};

