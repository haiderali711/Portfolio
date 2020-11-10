import React, { useState } from "react";
import { Accordion, Card, Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

export default function AddNewProject(props) {
  const [show, setShow] = useState(false);
  const [message, newMessage] = useState("");

  let createProject = () => {
    let nameF = document.getElementById("formName").value;
    let linkF = document.getElementById("formLink").value;
    let detailF = document.getElementById("formDetails").value;
    let pictureF = document.getElementById("formDetails").value;
    let bodyO = {};
    if (nameF === "" || detailF === "") {
      setShow(true);
      newMessage(
        "You have to provide atleast Name and detail for the project."
      );
      return null;
    } else {
      bodyO.user = props.userID;
      bodyO.name = nameF;
      bodyO.detail = detailF;
      if (linkF !== "") bodyO.link = linkF;
      if (pictureF !== "") bodyO.picture = pictureF;
    }

    axios
      .post(props.api + "/projects/", bodyO)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
              Add details for your new Project
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Name of the Project"
                  />
                </Form.Group>
                <Form.Group controlId="formLink">
                  <Form.Label>External Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Link to your project"
                  />
                </Form.Group>
                <Form.Group controlId="fromPictureLink">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="A link to A picture of your project"
                  />
                </Form.Group>
                <Form.Group controlId="formDetails">
                  <Form.Label>Detailed Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Maximum 200 Letters"
                  />
                </Form.Group>
                <Button variant="dark" type="button" onClick={createProject}>
                  Add Project
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
