import React from "react";
import Home from "./Views/Home";
import { Route } from "react-router-dom";
import LoginItem from "./Components/Login/LoginItem";
import RegisterItem from "./Components/Register/RegisterItem";
import Profile from "./Views/Profile";

export default function router({ signedIn, onSignIn, changeIsSignedIn }) {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        component={() => {
          return (
            <LoginItem
              signedIn={signedIn}
              onSignIn={onSignIn}
              changeIsSignedIn={changeIsSignedIn}
            />
          );
        }}
      />
      <Route exact path="/register" component={RegisterItem} />
      <Route
        exact
        path="/profile"
        component={() => {
          return <Profile signedIn={signedIn} />;
        }}
      />
    </div>
  );
}
