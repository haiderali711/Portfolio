import React from "react";
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

export default function listCourses(props) {
  return (
    <Container>
      <Card>
        <Modal.Header>
          <h1>
            <Badge variant="secondary">Your Courses</Badge>
          </h1>
        </Modal.Header>
        <ListGroup style={{ marginBottom: "1rem" }}>
          <TransitionGroup className="todo-list">
            {props.arrayCourse.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={800} classNames="item">
                <ListGroup.Item>
                  {name}
                  <Button
                    className="remove-btn"
                    variant="danger"
                    size="sm"
                    onClick={
                      () => {
                        props.removeCourse(_id);
                      }
                      // setItems((items) => items.filter((item) => item.id !== id))
                    }
                  >
                    &times;
                  </Button>
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Card>
    </Container>
  );
}
