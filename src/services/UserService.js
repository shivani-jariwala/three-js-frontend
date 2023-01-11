import axios from "axios";
import {
    registrationStart,
    registrationEnd,
    loginStart,
    loginSuccess,
    loginFailure,
    openAlert
} from '../actions/Index'
import setBearer from "../utils/SetBearer";
const baseUrl = "http://localhost:3001/user/";

export const register = async (
  { name, surname, email, password, repassword },
  dispatch
) => {
  dispatch(registrationStart());
  if (password !== repassword) {
    dispatch(
      openAlert({
        message: "Your passwords does not match!",
        severity: "error",
      })
    );
  } else {
    try {
      const res = await axios.post(`${baseUrl}register`, {
        name,
        surname,
        email,
        password,
      });
    } catch (error) {
      dispatch(
        openAlert({
          message: error?.response?.data?.errMessage
            ? error.response.data.errMessage
            : error.message,
          severity: "error",
        })
      );
    }
  }
  dispatch(registrationEnd());
};

export const login = async ({ email, password }, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(baseUrl + "login", { email, password });
    const { user } = res.data;
    localStorage.setItem("token", user.token);
    setBearer(user.token);
    dispatch(loginSuccess({ user }));
  } catch (error) {
    dispatch(loginFailure());
  }
};
