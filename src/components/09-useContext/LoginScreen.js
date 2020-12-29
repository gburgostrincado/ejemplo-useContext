import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const history = useHistory()

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push('/')
          setUser({
            id: 1234,
            name: "Valentina",
            email: "valejesust@gmail.com",
          })
        }
        }
      >
        Login
      </button>
    </div>
  );
};
