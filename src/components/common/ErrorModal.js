// import * as React from "react";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";
// import { useHistory } from "react-router-dom";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const AlertSnackBar = () => {
//   const dispatch = useDispatch();
//   const { open, message, severity, duration, nextRoute=null } = useSelector(
//     (state) => state.alert
//   );
//   const history = useHistory();
//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     dispatch(closeAlert());
//     try {
//       history.push(null);
//     } catch (error) {}
//   };

//   return (
//     <>
//       <Snackbar
//         open={false}
//         autoHideDuration={3000}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert onClose={handleClose} severity={"error"} sx={{ width: "100%" }}>
//           {'off'}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// // const mapStateToProps = (state) => ({
// //   message: state.alert.message,
// //   nextRoute: state.alert.nextRoute
// // });

// // export default connect(mapStateToProps)(AlertSnackBar);
// export default AlertSnackBar;


import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { closeAlert } from "../../actions/Index";
import { useHistory } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackBar = () => {
  const dispatch = useDispatch();
  const hi = useSelector(
    (state) => state.alert
  );
  console.log("hey",hi)
  const history = useHistory();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // dispatch(closeAlert());
    try {
      history.push(null);
    } catch (error) {}
  };

  return (
    <>
      {/* <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default AlertSnackBar;

