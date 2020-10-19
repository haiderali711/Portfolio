import React from "react";
import "../Register/RegisterItem.css";
import {
  Form,
  Button,
  Col,
  Container,
  Jumbotron,
  Modal
} from "react-bootstrap";

export const RegisterItem = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Modal.Header>
            <Modal.Title>Register User</Modal.Title>
          </Modal.Header>
          <Form className="registerForm">
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>

              <Form.Group as={Col} controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="country" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" type="submit" href="/login">
                Register
              </Button>
            </Modal.Footer>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default RegisterItem;
