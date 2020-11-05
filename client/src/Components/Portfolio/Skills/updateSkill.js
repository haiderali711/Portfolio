import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export default function UpdateSkill(props) {
  const [currentLevel, setLevel] = useState(0);
  let listType = ["Language", "Programming", "Managegment"];
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update the Skill Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formSkill">
            <Form.Label>Skill Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Name of the Skill"
            />
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              <option>Not selected</option>
              {listType.map((element, i) => (
                <option key={i}>{element}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control as="select">
              <option>Not selected</option>
              {props.listCourses.map((course) => (
                <option key={course._id}>{course.name}</option>
              ))}
            </Form.Control>
            <Form.Text className="text-muted">
              Choose One of your courses if the Skill is related to it
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formProject">
            <Form.Label>Projects</Form.Label>
            <Form.Control as="select">
              <option>Not selected</option>
              {props.listProjects.map((project) => (
                <option key={project._id}>{project.name}</option>
              ))}
            </Form.Control>
            <Form.Text className="text-muted">
              Choose One of your projects if the Skill is related to it
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Level of the Skill</Form.Label>
            <RangeSlider
              value={currentLevel}
              onChange={(e) => setLevel(e.target.value)}
              step={1}
              min={1}
              max={5}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Update Skill
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
