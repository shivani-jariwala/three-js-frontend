import { private_createTypography } from "@mui/material";
import axios from "axios";
import {
  registrationStart,
  registrationEnd,
  // openAlert,
} from "../actions/Index";
import { store } from '../store/Index';
import setBearer from "../utils/SetBearer";
const baseUrl = "http://localhost:8000";


export function getAllProducts() {
  // const state = store.getState();
  // const headers = {
  //   authorization: state.user.token,
  // };
  // console.log("token",headers)
  // const a = axios.defaults.headers.common["Authorization"];
  // console.log("bearer",a)
  return axios
    .get(`${baseUrl}/products/get-all`)
    .then((resp) => {
      const responseBody = resp.data;
      if (responseBody.message === "success") {
        return responseBody;
      } else {
        // dispatch(
        //   openAlert({
        //     message: 'something went wrong',
        //     severity: "error",
        //   })
        // );
      }
    })
    .catch((error) => {
      // openAlert({
      //   message: error?.response?.data?.errMessage
      //     ? error.response.data.errMessage
      //     : error.message,
      //   severity: "error",
      // });
    });
}

export function editProduct({id,name,price,description},dispatch) {
  return axios
    .post(`${baseUrl}/products/edit`,{
      newName: name,
      newPrice: price,
      newDescription: description,
      id
    })
    .then((resp) => {
      const responseBody = resp.data;
      if (responseBody.message === "success") {
        return responseBody;
      } else {
        // dispatch(
        //   openAlert({
        //     message: 'something went wrong',
        //     severity: "error",
        //   })
        // );
      }
    })
    .catch((error) => {
      // openAlert({
      //   message: error?.response?.data?.errMessage
      //     ? error.response.data.errMessage
      //     : error.message,
      //   severity: "error",
      // });
    });
}

export function deleteProduct(id) {
  console.log("delete",id)
  return axios
    .get(`${baseUrl}/products/remove-product`,{
      params: {
        id
      }
    })
    .then((resp) => {
      const responseBody = resp.data;
      if (responseBody.message === "success") {
        return responseBody;
      } else {
        // dispatch(
        //   openAlert({
        //     message: 'something went wrong',
        //     severity: "error",
        //   })
        // );
      }
    })
    .catch((error) => {
      // openAlert({
      //   message: error?.response?.data?.errMessage
      //     ? error.response.data.errMessage
      //     : error.message,
      //   severity: "error",
      // });
    });
}
