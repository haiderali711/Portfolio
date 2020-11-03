import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewSkill from "./addNewSkill";
import ShowListSkills from "./listSkills";
import { getCookieValue } from "../../../Sessions/CookiesController";
import axios from "axios";

export default class skillItem extends Component {
  constructor(props) {
    super(props);
    this.state = { listCourses: [], listProjects: [], listSkills: [] };
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
    axios
      .get(this.props.api + "/users/" + getCookieValue("id") + "/skills")
      .then(res => {
        this.setState({ listSkills: res.data.reverse() });
      })
      .catch(error => {
        console.log(error.response.status);
        this.setState({ listSkills: [] });
      });
  }

  updateSkills = data => {
    let temp = this.state.listSkills;
    temp.unshift(data);
    this.setState({ listSkills: temp });
  };

  showSkills = () => {
    if (this.state.listSkills.length !== 0) {
      return (
        <ShowListSkills
          api={this.props.api}
          listSkills={this.state.listSkills}
          updateSkills={this.updateSkills}
        />
      );
    } else return null;
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Container>
              <AddNewSkill
                api={this.props.api}
                listCourses={this.state.listCourses}
                listProjects={this.state.listProjects}
              />
            </Container>
          </Col>
          <Col>
            <Container>{this.showSkills}</Container>
          </Col>
        </Row>
      </div>
    );
  }
}
