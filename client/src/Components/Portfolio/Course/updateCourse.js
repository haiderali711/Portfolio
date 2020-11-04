import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export default class updateCourse extends Component {
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data._id !== prevProps.data._id) {
      this.prevProps = this.props;
    }
  }

  patchNewValuesInCourse = () => {
    var patchObj = {};
    patchObj.name = document.getElementById("nameCourseModal").value;
    patchObj.grade = document.getElementById("gradeCourseModal").value;

    axios
      .patch(this.props.api + "/courses/" + this.props.data._id, patchObj)
      .then((res) => {
        console.log(res.data);
        let updatedObject = this.props.data;
        updatedObject.name = patchObj.name;
        updatedObject.grade = patchObj.grade;
        this.props.patchOneCourse(updatedObject);
        this.props.handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Modal animation show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Course Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="nameCourseModal">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Course name"
                  defaultValue={this.props.data.name}
                />
              </Form.Group>
              <Form.Group controlId="gradeCourseModal">
                <Form.Label>Grades</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Grades"
                  defaultValue={this.props.data.grade}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.patchNewValuesInCourse}>
              Update Course
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
