import React from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Jumbotron,
  Badge,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

export const LoginItem = ({ signedIn, onSignIn }) => {
  const submitLogin = () => {
    var nameValue = document.getElementById("email").value;
    console.log("i was cliecked  " + nameValue);
  };

  console.log("signedIn in LoginItem : " + signedIn);
  if (signedIn) {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>The user is Already Logged In </h1>
        </Container>
      </Jumbotron>
    );
  } else {
    return (
      <div>
        <Jumbotron fluid>
          <Container className="loginBox">
            <Card>
              <Modal.Header>
                <h1>
                  <Badge variant="secondary">Login</Badge>
                </h1>
              </Modal.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Modal.Footer>
                    <LinkContainer to="/">
                      <Button variant="primary" onClick={onSignIn}>
                        Sign in with Google
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={submitLogin}
                    >
                      Sign in
                    </Button>
                  </Modal.Footer>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </div>
    );
  }
};

export default LoginItem;
