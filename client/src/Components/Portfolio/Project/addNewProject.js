import React /*useState*/ from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
// import axios from "axios";

export default function AddNewProject() {
  // name: { type: String, required: true, maxlength: 50 },
  // detail : { type: String, required: true, maxlength: 200 },
  // link : { type: String, required: true, maxlength: 200 },
  // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // picture : { type: String, maxlength: 200 }
  let createProject = () => {};
  return (
    <div>
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
                <Form.Group controlId="fromLink">
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
