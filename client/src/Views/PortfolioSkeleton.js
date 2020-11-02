import React, { Component } from "react";
import { Container, Jumbotron, ListGroup } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import AddCourseItem from "../Components/Portfolio/Course/AddCourseItem";
import AddSkillItem from "../Components/Portfolio/Skills/skillItem";
import AddProjectItem from "../Components/Portfolio/AddProjectItem";
import AddDegreeItem from "../Components/Portfolio/Degree/AddDegreeItem";

import "./PortfolioSkeleton.css";

export default class PortfolioSkeleton extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { activeWindow: 0 };
  }

  renderRelativeItem = () => {
    return (
      <div>
        <CSSTransition
          in={this.state.activeWindow === 1}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddSkillItem api={this.props.api} />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 2}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddProjectItem api={this.props.api} />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 3}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddCourseItem api={this.props.api} />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 4}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddDegreeItem api={this.props.api} />
        </CSSTransition>
      </div>
    );
  };

  render() {
    return (
      <div className="main-container">
        <Container>
          <Jumbotron fluid className="main-container">
            <div>
              <ListGroup className="nav-list-bar" horizontal>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#skills"
                  onClick={() => {
                    this.setState({ activeWindow: 1 });
                  }}
                >
                  Skills
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#projects"
                  onClick={() => {
                    this.setState({ activeWindow: 2 });
                  }}
                >
                  Projects
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#courses"
                  onClick={() => {
                    this.setState({ activeWindow: 3 });
                  }}
                >
                  Courses
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#degrees"
                  onClick={() => {
                    this.setState({ activeWindow: 4 });
                  }}
                >
                  Degrees
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div>{this.renderRelativeItem()}</div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
