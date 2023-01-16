import axios from "axios";
import {
    registrationStart,
    registrationEnd,
    loginStart,
    loginSuccess,
    loginFailure,
    openAlert
} from '../actions/Index'
import { showError } from "../utils/ErrorHandler";
import setBearer from "../utils/SetBearer";
const baseUrl = "http://localhost:8000";

export function register({name, email, password},dispatch) {
    return axios.post(`${baseUrl}/auth/register`, {
      name,
      email,
      password
    })
    .then((resp) => {
      console.log("respinse",resp)
      const responseBody = resp.data;
      if (responseBody.message === 'success') {
        return responseBody;
      }
      const err = new Error('Invalid response');
      err.data = responseBody;
      showError(err);
      throw err;
    })
    .catch((err) => {
      showError(err);
      throw err;
    });
};


// export const login = async ({ email, password }, dispatch) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post(baseUrl + "login", { email, password });
//     const { user } = res.data;
//     localStorage.setItem("token", user.token);
//     setBearer(user.token);
//     dispatch(loginSuccess({ user }));
//   } catch (error) {
//     dispatch(loginFailure());
//   }
// };
export function login({email,password},dispatch) {
  return axios
    .post(`${baseUrl}/auth/login`, {
      email,
      password
    })
    .then((resp) => {
      const responseBody = resp.data;
      localStorage.setItem("token", responseBody.user.token);
      setBearer(responseBody.user.token);
      if (responseBody.message === 'success') {
        return responseBody;
      }
      const err = new Error('Invalid response');
      err.data = responseBody;
      showError(err);
      throw err;
    })
    .catch((err) => {
      localStorage.removeItem("token")
      showError(err);
      throw err;
    });
}
