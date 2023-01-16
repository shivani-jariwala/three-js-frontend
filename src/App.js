import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FreeRoute from "./utils/FreeRoute";
import ProtectedRoute from "./utils/ProtectedRoute";
import Products from "./components/Products";
import Login from './components/AuthPages/LoginPages/Login';
import Register from './components/AuthPages/RegisterPages/Register';
import { hideError } from './actions/Index';
import { FaTimes } from 'react-icons/fa';
import errorIcon from './images/common/Error.svg';
import Alert from "./components/common/ErrorModal";
import Modal from 'react-bootstrap/Modal';
import EditProduct from "./components/AuthPages/ProductPages/EditPage";

function App(props) {
  
  const hideModal = () => {
    props.dispatch(hideError());
  };

  return (
    <div>
    <BrowserRouter>
      {/* <Alert /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/edit" component={EditProduct} />
      </Switch>
    </BrowserRouter>
    {props.appError && props.appError.hasError && (
          <Alert/>
        )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   appError: state.alert.appError,
// });

// export default connect(mapStateToProps)(App);
export default App;
