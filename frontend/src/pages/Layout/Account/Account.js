import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountProfile from "../../../components/AccountProfile/AccountProfile";
import { profileActions } from "../../../reducers/profile/profileReducer";

const Account = ({ username = "" }) => {
  const { profile } = useSelector((rootReducer) => rootReducer.profileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(
        profileActions.GET_PROFILE({
          username,
        })
      );
    }
  }, [username]);

  return (
    <div>
      <AccountProfile profile={profile} />
      <Divider />
    </div>
  );
};

export default Account;
