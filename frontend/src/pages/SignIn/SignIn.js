import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Alert from "../../components/Alert/Alert";
import { userActions } from "../../reducers/user/userReducer";
import SignInForm from "../../components/SignInForm/SignInForm";
import useStyles from "./SignIn.style";

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    authentication: {
      success: authentication_success,
      failure: authentication_fuilure,
    },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const init_registration_failure = () => {
    dispatch(
      userActions.AUTHENTICATION_FAILURE({
        errors: "",
      })
    );
  };

  const handleCloseErrorAlert = () => {
    init_registration_failure();
  };

  const handleCloseSuccessAlert = () => {
    init_registration_failure();
    history.push("/main");
  };

  useEffect(() => {
    init_registration_failure();
  }, []);

  return (
    <div className={classes.root}>
      <SignInForm />

      {authentication_fuilure && (
        <Alert
          message={authentication_fuilure}
          severity={"error"}
          handleOnClose={handleCloseErrorAlert}

        />
      )}

      {authentication_success && (
        <Alert
          message={"You have been signed up. Please log in."}
          severity={"success"}
          handleOnClose={handleCloseSuccessAlert}
        />
      )}
    </div>
  );
};

export default SignIn;
