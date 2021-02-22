import React from "react";
import { TextField } from "@material-ui/core";

const LoginForm = () => {
  return (
    <form>
      <TextField aria-label="email" role="input" label="E-Mail" required />
      <TextField
        type="password"
        aria-label="password"
        role="input"
        label="password"
        required
      />
    </form>
  );
};

export default LoginForm;
