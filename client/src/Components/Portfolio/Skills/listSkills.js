import React from "react";
import { ListGroup, Card, Modal, Badge, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./listSkills.css";
import ScrollArea from "react-scrollbar";

export default function ListSkills(props) {
  return (
    <section>
      <br />
      <Card>
        <Modal.Header>
          <h1>
            <Badge variant="secondary">Your Skills</Badge>
          </h1>
        </Modal.Header>
        <ScrollArea className="react-scrollbar-default">
          <ListGroup style={{ marginBottom: "1rem" }}>
            <TransitionGroup className="todo-list">
              {props.listSkills.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={800} classNames="item">
                  <ListGroup.Item>
                    {name}
                    <Button
                      className="remove-btn"
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        props.removeSkill(_id);
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
    </section>
  );
}
