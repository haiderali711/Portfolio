import React, { useState } from "react";
import { ListGroup, Card, Modal, Badge, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./listSkills.css";
import ScrollArea from "react-scrollbar";
import UpdatetSkill from "./updateSkill";

export default function ListSkills(props) {
  const [show, setShow] = useState(false);
  const [currentSkillID, updateSkillID] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <br />
      <UpdatetSkill show={show} handleClose={handleClose} id={currentSkillID} />

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
                      variant="light"
                      size="sm"
                      onClick={() => {
                        updateSkillID(_id);
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
