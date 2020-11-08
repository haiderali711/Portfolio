import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import axios from "axios";

export default class updateDegrgee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

    this.listType = ["Under Graduate", "Bachelors", "Masters", "Doctorate"];
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.prevProps = this.props;
      this.renderCurrentCourseProjectLevel();
    }
  }
  renderCurrentCourseProjectLevel = () => {
    // if (this.props.data.course !== undefined) {
    //   this.props.listCourses.forEach(element => {
    //     if (element._id === this.props.data.course)
    //       this.setState({ currentCourseName: element.name });
    //   });
    // } else {
    //   this.setState({ currentCourseName: "Not Selected" });
    // }
    // if (this.props.data.project !== undefined) {
    //   this.props.listProjects.forEach(element => {
    //     if (element._id === this.props.data.project)
    //       this.setState({ currentProjectName: element.name });
    //   });
    // } else {
    //   this.setState({ currentProjectName: "Not Selected" });
    // }
    // this.setState({ currentLevel: this.props.data.level });
  };

  patchNewValuesInSkill = () => {};
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update the Skill Data</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Update Skill
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
