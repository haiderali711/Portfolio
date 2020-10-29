import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import AddCourseItem from "../Components/Portfolio/AddCourseItem";
import "./PortfolioSkeleton.css";

export default class PortfolioSkeleton extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: [] };
  }
  render() {
    return (
      <div>
        <Container>
          <Jumbotron fluid>
            <Container></Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
