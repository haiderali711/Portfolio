import React from "react";
import Home from "./Views/Home";
import { BrowserRouter, Route } from "react-router-dom";
import LoginItem from "./Components/Login/LoginItem";
import RegisterItem from "./Components/Register/RegisterItem";

export default function router({ signedIn, onSignIn, onSignOut }) {
  console.log("signedIn in navigationbar : " + signedIn);

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route
        path="/login"
        component={() => {
          return (
            <LoginItem signedIn={signedIn} onSignIn={onSignIn} />
          );
        }}
      />
      <Route path="/register" component={RegisterItem} />
    </BrowserRouter>
  );
}
