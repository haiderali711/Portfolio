import React from "react";
import Home from "./Views/Home";
import { Route } from "react-router-dom";
import LoginItem from "./Components/Login/LoginItem";
import RegisterItem from "./Components/Register/RegisterItem";

export default function router({ signedIn, onSignIn }) {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        component={() => {
          return <LoginItem signedIn={signedIn} onSignIn={onSignIn} />;
        }}
      />
      <Route exact path="/register" component={RegisterItem} />
    </div>
  );
}
