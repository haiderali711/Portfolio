import React, { useState } from "react";
import { Card, Badge, Modal, ListGroup, Col, Row } from "react-bootstrap/";
import NameUpdateItem from "./NameUpdateItem";
import ProfileUpdateItem from "./ProfileUpdateItem";
import "./ProfileItem.css";

export default function Profile({ info, updateInfo }) {
  const originalObject = {
    name: false,
    email: false,
    username: false,
    password: false,
    address: false,
    city: false,
    country: false,
  };

  const [currentValues, newValues] = useState(originalObject);

  var updateStatesAccordingly = (item) => {
    var temporaryObject = originalObject;

    if (item === 1) {
      temporaryObject.name = true;
      newValues(temporaryObject);
    } else if (item === 2) {
      temporaryObject.email = true;
      newValues(temporaryObject);
    } else if (item === 3) {
      temporaryObject.username = true;
      newValues(temporaryObject);
    } else if (item === 4) {
      temporaryObject.password = true;
      newValues(temporaryObject);
    } else if (item === 5) {
      temporaryObject.address = true;
      newValues(temporaryObject);
    } else if (item === 6) {
      temporaryObject.city = true;
      newValues(temporaryObject);
    } else if (item === 7) {
      temporaryObject.country = true;
      newValues(temporaryObject);
    }
  };

  var renderUpdateItems = () => {
    if (currentValues.name === true)
      return (
        <NameUpdateItem
          user_name={info.name}
          user_surname={info.surname}
          updateInfo={updateInfo}
          oldInfo={info}
        />
      );
    else if (currentValues.email === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"email"}
          inputType={"email"}
          controlID={"update-email"}
          formLabel={"Email"}
          updateInfo={updateInfo}
        />
      );
    else if (currentValues.username === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"username"}
          inputType={"text"}
          controlID={"update-username"}
          formLabel={"Username"}
          updateInfo={updateInfo}
        />
      );
    else if (currentValues.password === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"password"}
          inputType={"password"}
          controlID={"update-password"}
          formLabel={"Password"}
          updateInfo={updateInfo}
        />
      );
    else if (currentValues.address === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"address"}
          inputType={"text"}
          controlID={"update-address"}
          formLabel={"Address"}
          updateInfo={updateInfo}
        />
      );
    else if (currentValues.city === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"city"}
          inputType={"text"}
          controlID={"update-city"}
          formLabel={"City"}
          updateInfo={updateInfo}
        />
      );
    else if (currentValues.country === true)
      return (
        <ProfileUpdateItem
          oldInfo={info}
          itemToUpdate={"country"}
          inputType={"text"}
          controlID={"update-country"}
          formLabel={"Country"}
          updateInfo={updateInfo}
        />
      );
    else return null;
  };

  return (
    <div>
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
                    className="profile-list-item"
                    action
                    href="#name"
                    onClick={() => {
                      updateStatesAccordingly(1);
                    }}
                  >
                    {info.name + " " + info.surname}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#email"
                    onClick={() => {
                      updateStatesAccordingly(2);
                    }}
                  >
                    {info.email}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#username"
                    onClick={() => {
                      updateStatesAccordingly(3);
                    }}
                  >
                    {info.username}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#password"
                    onClick={() => {
                      updateStatesAccordingly(4);
                    }}
                  >
                    ***********
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#address"
                    onClick={() => {
                      updateStatesAccordingly(5);
                    }}
                  >
                    {info.address}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#city"
                    onClick={() => {
                      updateStatesAccordingly(6);
                    }}
                  >
                    {info.city}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="profile-list-item"
                    action
                    href="#country"
                    onClick={() => {
                      updateStatesAccordingly(7);
                    }}
                  >
                    {info.country}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>{renderUpdateItems()}</Col>
      </Row>
    </div>
  );
}
