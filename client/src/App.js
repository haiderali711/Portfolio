import React from "react";
import NavBar from "./Components/NavigationBarItem";
import Home from "./Views/Home"
import Router from './router'

function App() {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}


export default App;
