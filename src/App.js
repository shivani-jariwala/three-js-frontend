import React, { useState, useEffect } from "react";
// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FreeRoute from "./utils/FreeRoute";
import ProtectedRoute from "./utils/ProtectedRoute";
import Products from "./components/Products";
import Login from './components/AuthPages/LoginPages/Login';
import Register from './components/AuthPages/RegisterPages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <FreeRoute exact path="/login" component={Login} />
        <FreeRoute exact path="/register" component={Register} />
        {/* <FreeRoute exact path="/" component={Products} /> */}
        <Route exact path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
