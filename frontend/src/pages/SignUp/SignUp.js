import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Alert from "../../components/Alert/Alert";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./SignUp.style";

const SignUp = () => {
  const classes = useStyles();
  const {
    registration: {
      success: registration_success,
      failure: registration_failure,
    },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const init_registration_failure = () => {
    dispatch(
      userActions.REGISTRATION_FAILURE({
        errors: "",
      })
    );
  };

  const handleCloseErrorAlert = () => {
    init_registration_failure();
  };

  const handleCloseSuccessAlert = () => {
    init_registration_failure();
    history.push("/sign-in");
  };

  useEffect(() => {
    init_registration_failure();
  }, []);

  return (
    <div className={classes.root}>
      <SignUpForm />

      {registration_failure && (
        <Alert
          message={registration_failure}
          severity={"error"}
          handleOnClose={handleCloseErrorAlert}
        />
      )}

      {registration_success && (
        <Alert
          message={"You have been signed up. Please log in."}
          severity={"success"}
          handleOnClose={handleCloseSuccessAlert}
        />
      )}
    </div>
  );
};

export default SignUp;
