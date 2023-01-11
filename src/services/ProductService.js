import axios from "axios";
import {
  registrationStart,
  registrationEnd,
  openAlert,
} from "../actions/Index";
import { store } from '../store/Index';
import setBearer from "../utils/SetBearer";
const baseUrl = "http://localhost:3001/";


export function getAllProducts({},dispatch) {
  const state = store.getState();
  const headers = {
    authorization: state.user.authToken,
  };
  return axios
    .get(`${baseUrl}/get-all`, {
      headers,
    })
    .then((resp) => {
      const responseBody = resp.data;
      if (responseBody.message === "success") {
        return responseBody;
      } else {
        dispatch(
          openAlert({
            message: 'something went wrong',
            severity: "error",
          })
        );
      }
    })
    .catch((error) => {
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      });
    });
}
