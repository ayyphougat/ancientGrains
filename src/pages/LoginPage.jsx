import React from "react";
import { Login } from "../components";
import { Fade } from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";

const LoginPage = () => {
  return (
    <div>
      <AttentionSeeker effect="swing">
        <Login />
      </AttentionSeeker>
    </div>
  );
};

export default LoginPage;
