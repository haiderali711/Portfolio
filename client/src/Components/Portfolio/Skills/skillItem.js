import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AddNewSkill from "./addNewSkill";
import { getCookieValue } from "../../../Sessions/CookiesController";
import axios from "axios";

export default class skillItem extends Component {
  constructor(props) {
    super(props);
    this.state = { listCourses: [], listProjects: [] };
  }

  componentDidMount() {
    axios
      .get(this.props.api + "/users/" + getCookieValue("id") + "/courses")
      .then(res => {
        this.setState({ listCourses: res.data });
      })
      .catch(error => {
        console.log(error.response.status);
      });
    axios
      .get(this.props.api + "/users/" + getCookieValue("id") + "/projects")
      .then(res => {
        this.setState({ listProjects: res.data });
      })
      .catch(error => {
        console.log(error.response.status);
      });
  }
  render() {
    return (
      <div>
        <Container>
          <AddNewSkill
            listCourses={this.state.listCourses}
            listProjects={this.state.listProjects}
          />
        </Container>
      </div>
    );
  }
}
