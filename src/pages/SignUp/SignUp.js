import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert/Alert";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./SignUp.style";

const SignUp = () => {
  const classes = useStyles();
  const {
    registration: {
      failure: registration_failure,
    },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

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
    </div>
  );
};

export default SignUp;
