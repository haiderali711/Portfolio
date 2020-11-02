import React from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
// import { getCookieValue } from "../../../Sessions/CookiesController";
// import axios from "axios";

export default function addNewSkill(props) {
  let listType = ["Language", "Programming", "Managegment"];
  // let createSkill = () => {};

  return (
    <div>
      <br />
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="text" eventKey="0" action>
              Add a New Skill
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Group controlId="formSkill">
                  <Form.Label>Skill Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="forType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select">
                    <option>Not selected</option>
                    {/* {props.listCourse.map((course) => (
                  <option key={course.id}>{course.name}</option>
                ))} */}
                    {listType.map((element, i) => (
                      <option key={i}>{element}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="nameCourse">
                  <Form.Label>Course</Form.Label>
                  <Form.Control as="select">
                    <option>Not selected</option>
                    {props.listCourses.map(course => (
                      <option key={course._id}>{course.name}</option>
                    ))}
                  </Form.Control>
                  <Form.Text className="text-muted">
                    Choose One of your courses if the Skill is related to it
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="nameProject">
                  <Form.Label>Projects</Form.Label>
                  <Form.Control as="select">
                    <option>Not selected</option>
                    {props.listProjects.map(project => (
                      <option key={project._id}>{project.name}</option>
                    ))}
                  </Form.Control>
                  <Form.Text className="text-muted">
                    Choose One of your projects if the Skill is related to it
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formRange">
                  <Form.Label>Range</Form.Label>
                  <Form.Control type="range" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
