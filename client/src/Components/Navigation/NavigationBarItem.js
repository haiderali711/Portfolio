import { Navbar, Nav } from "react-bootstrap/";
import React from "react";
import Router from "../../router";

export const NavBar = ({ signedIn, onSignIn, onSignOut }) => {
  console.log("signedIn in navigationbar : " + signedIn);

  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Portfolios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link  href="/login" >Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login" onClick={onSignOut}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div>
        <Router signedIn={signedIn} onSignIn={onSignIn} />
      </div>
    </div>
  );
};

export default NavBar;
