import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  // const user = useSelector((state) => state.user);
  let user;
  user.isAuthenticated = true;
  user.pending =false;
  
  useEffect(() => {
    if (!user.isAuthenticated && !user.pending) {
      history.push("/")
    };
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isAuthenticated && !user.pending) {
          return <Component {...props} />;
        } else return <LoadingScreen />;
      }}
    />
  );
};

export default ProtectedRoute;
