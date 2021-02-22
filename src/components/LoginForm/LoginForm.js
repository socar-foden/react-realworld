import React from "react";
import { Button, TextField } from "@material-ui/core";

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
      <Button variant="contained" color="primary" aria-label="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
