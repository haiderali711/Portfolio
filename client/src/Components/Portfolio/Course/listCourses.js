import React, { useState } from "react";
import {
  ListGroup,
  Card,
  Modal,
  Badge,
  Button,
  Container
} from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./listCourses.css";
import ScrollArea from "react-scrollbar";
import UpdateCourse from "./updateCourse";

export default function ListCourses(props) {
  const [show, setShow] = useState(false);
  const [currentCourseID, updateCourseID] = useState("");
  const handleClose = () => {
    setShow(false);
    updateCourseID("");
  };
  const handleShow = () => setShow(true);

  return (
    <Container>
      <UpdateCourse
        api={props.api}
        show={show}
        handleClose={handleClose}
        id={currentCourseID}
        listDegree={props.listDegree}
      />
      <Card>
        <Modal.Header>
          <h1>
            <Badge variant="secondary">Your Courses</Badge>
          </h1>
        </Modal.Header>
        <ScrollArea className="react-scrollbar-default">
          <ListGroup style={{ marginBottom: "1rem" }}>
            <TransitionGroup className="todo-list">
              {props.arrayCourse.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={800} classNames="item">
                  <ListGroup.Item>
                    {name}
                    <Button
                      className="remove-btn"
                      variant="light"
                      size="sm"
                      onClick={() => {
                        console.log(_id);
                        updateCourseID(_id);
                        handleShow();
                      }}
                    >
                      &hellip;
                    </Button>
                    <Button
                      className="remove-btn"
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        props.removeCourse(_id);
                      }}
                    >
                      &times;
                    </Button>
                  </ListGroup.Item>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </ScrollArea>
      </Card>
    </Container>
  );
}