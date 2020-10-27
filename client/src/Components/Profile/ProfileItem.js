import React from "react";
import { Card, Tab, Badge, Modal, ListGroup, Col, Row } from "react-bootstrap/";
import NameUpdateItem from "./NameUpdateItem";
import ProfileUpdateItem from "./ProfileUpdateItem";

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
              <div>
                <ListGroup>
                  <ListGroup.Item
                    className="name-surname-list"
                    action
                    href="#name"
                  >
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
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"email"}
                inputType={"email"}
                controlID={"update-email"}
                formLabel={"Email"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#username">
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"username"}
                inputType={"text"}
                controlID={"update-username"}
                formLabel={"Username"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#password">
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"password"}
                inputType={"password"}
                controlID={"update-password"}
                formLabel={"Password"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#address">
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"address"}
                inputType={"text"}
                controlID={"update-address"}
                formLabel={"Address"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#city">
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"city"}
                inputType={"text"}
                controlID={"update-city"}
                formLabel={"City"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#country">
              <ProfileUpdateItem
                oldInfo={info}
                itemToUpdate={"country"}
                inputType={"text"}
                controlID={"update-country"}
                formLabel={"Country"}
                updateInfo={updateInfo}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
