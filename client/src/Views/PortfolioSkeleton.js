import React, { Component } from "react";
import { Container, Jumbotron, ListGroup } from "react-bootstrap";
// import { CSSTransition } from "react-transition-group";
import AddCourseItem from "../Components/Portfolio/AddCourseItem";
import "./PortfolioSkeleton.css";

export default class PortfolioSkeleton extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  renderRelativeItem = page => {
    if (page === 1) {
      return <AddCourseItem />;
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron fluid>
            <div>
              <ListGroup className="nav-list-bar" horizontal>
                <ListGroup.Item className="nav-list-item" action href="#skills">
                  Skills
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#projects"
                  onClick={() => {}}
                >
                  Projects
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#courses"
                >
                  Courses
                </ListGroup.Item>
                <ListGroup.Item
                  className="nav-list-item"
                  action
                  href="#degrees"
                >
                  Degrees
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
