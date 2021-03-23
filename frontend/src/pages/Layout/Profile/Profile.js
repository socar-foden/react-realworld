import React from "react";
import { useParams } from "react-router";
import Account from "../Account/Account";

const Profile = () => {
  const { username } = useParams();

  return <Account username={username} />;
};

export default Profile;
