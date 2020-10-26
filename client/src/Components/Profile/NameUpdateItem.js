import React from "react";
import { Form, Button, Col, Container, Modal, Card } from "react-bootstrap";
export default function NameUpdateItem({ user_name, user_surname, patchUser }) {
  const updateName = () => {
    var nameU = document.getElementById("update-name").value;
    var surnameU = document.getElementById("update-surname").value;

    var body = {
      name: nameU,
      surname: surnameU
    };
    patchUser(body);
  };

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Modal.Header>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Form className="registerForm">
              <Form.Row>
                <Form.Group as={Col} controlId="update-name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter new name" />
                </Form.Group>

                <Form.Group as={Col} controlId="update-surname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Enter new surname" />
                </Form.Group>
              </Form.Row>

              <Modal.Footer>
                <Button variant="primary" type="button" onClick={updateName}>
                  Update
                </Button>
              </Modal.Footer>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
