import { Divider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import AccountProfile from "../../../components/AccountProfile/AccountProfile";

const Account = () => {
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <div>
      <AccountProfile user={user} />
      <Divider />
    </div>
  );
};

export default Account;
