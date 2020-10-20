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

export const LoginItem = ({ signedIn ,onSignIn}) => {
  console.log("signedIn in LoginItem : " + signedIn);

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
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={onSignIn}
                    href="/"
                  >
                    Sign in with Google 
                  </Button>
                  <Button variant="primary" type="submit">
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
};

export default LoginItem;
