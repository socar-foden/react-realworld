import React from "react";
import loadable from "@loadable/component";
import { useParams } from "react-router";
const Account = loadable(() => import("../Account/Account"));

const Profile = () => {
  const { username } = useParams();

  return <Account username={username} />;
};

export default Profile;
