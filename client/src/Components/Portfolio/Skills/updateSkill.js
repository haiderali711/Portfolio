import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export default class updateSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      currentCourseName: "Not Selected",
      currentDegreeName: "Not Selected"
    };
    this.listType = ["Language", "Programming", "Managegment"];
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data._id !== prevProps.data._id) {
      this.prevProps = this.props;
    }
  }

  patchNewValuesInSkill = () => {
    console.log("Heeeeeej");
    // var patchObj = {};
    // patchObj.name = document.getElementById("nameCourseModal").value;
    // patchObj.grade = document.getElementById("gradeCourseModal").value;
    // axios
    //   .patch(this.props.api + "/courses/" + this.props.data._id, patchObj)
    //   .then((res) => {
    //     console.log(res.data);
    //     let updatedObject = this.props.data;
    //     updatedObject.name = patchObj.name;
    //     updatedObject.grade = patchObj.grade;
    //     this.props.patchOneCourse(updatedObject);
    //     this.props.handleClose();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update the Skill Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="patchSkill">
                <Form.Label>Skill Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Name of the Skill"
                  defaultValue={this.props.data.name}
                />
              </Form.Group>
              <Form.Group controlId="patchType">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" defaultValue={this.props.data.type}>
                  <option>Not selected</option>
                  {this.listType.map((element, i) => (
                    <option key={i} value={element}>
                      {element}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="patchCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control as="select">
                  <option>Not selected</option>
                  {this.props.listCourses.map(course => (
                    <option key={course._id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </Form.Control>
                <Form.Text className="text-muted">
                  Choose One of your courses if the Skill is related to it
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="patchProject">
                <Form.Label>Projects</Form.Label>
                <Form.Control as="select">
                  <option>Not selected</option>
                  {this.props.listProjects.map(project => (
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
                  value={this.state.currentLevel}
                  onChange={e =>
                    this.setState({ currentLevel: e.target.value })
                  }
                  step={1}
                  min={1}
                  max={5}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.patchNewValuesInSkill}>
              Update Skill
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
