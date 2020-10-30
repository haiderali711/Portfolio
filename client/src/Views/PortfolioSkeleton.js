import React, { Component } from "react";
import { Container, Jumbotron, ListGroup } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import AddCourseItem from "../Components/Portfolio/AddCourseItem";
import AddSkillItem from "../Components/Portfolio/AddSkillItem";
import AddProjectItem from "../Components/Portfolio/AddProjectItem";
import AddDegreeItem from "../Components/Portfolio/AddDegreeItem";

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
          <AddSkillItem />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 2}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddProjectItem />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 3}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddCourseItem />
        </CSSTransition>
        <CSSTransition
          in={this.state.activeWindow === 4}
          timeout={300}
          classNames="objs"
          unmountOnExit
        >
          <AddDegreeItem />
        </CSSTransition>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron fluid>
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