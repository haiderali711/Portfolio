import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getCookieValue } from "../../../Sessions/CookiesController";
import axios from "axios";
import AddNewDegree from "./addNewDegree";

export default class DegreeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { listDegrees: [] };
  }
  componentDidMount() {
    axios
      .get(this.props.api + "/users/" + getCookieValue("id") + "/degrees")
      .then((res) => {
        this.setState({ listDegrees: res.data });
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <AddNewDegree
                api={this.props.api}
                listDegrees={this.state.listDegrees}
                // listCourses={this.state.listCourses}
                // listProjects={this.state.listProjects}
                // updateSkills={this.updateSkills}
              />
            </Col>
            {/* <Col>
              <Container></Container>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
