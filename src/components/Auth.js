import React from "react";
import { useAuth } from "./AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useAuth();

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p>{isAuthenticated ? "you are authenticated" : "you are not authenticated"}</p>
      <label>
        <input type="checkbox" onChange={toggleAuth} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
