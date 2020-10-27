import React from "react";
import { Card, Tab, Badge, Modal, ListGroup, Col, Row } from "react-bootstrap/";
import "./ProfileItem.css";
import NameUpdateItem from "./NameUpdateItem";

export default function Profile({ info, updateInfo }) {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="name">
      <Row>
        <Col>
          <Card className="">
            <Card.Body>
              <Modal.Header>
                <Card.Title>
                  <h1>
                    <Badge variant="secondary">User Profile</Badge>
                  </h1>
                </Card.Title>
              </Modal.Header>
              {/* <Card.Text></Card.Text> */}
              <div className="list-div">
                <ListGroup>
                  <ListGroup.Item action href="#name">
                    {info.name + " " + info.surname}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#email">
                    {info.email}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#username">
                    {info.username}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#password">
                    ***********
                  </ListGroup.Item>
                  <ListGroup.Item action href="#address">
                    {info.address}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#city">
                    {info.city}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#country">
                    {info.country}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="#name">
              <NameUpdateItem
                user_name={info.name}
                user_surname={info.surname}
                updateInfo={updateInfo}
                oldInfo={info}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#email">
              <p>hello my email </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
