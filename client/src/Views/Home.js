import React from "react";
import { Container, Jumbotron } from "react-bootstrap/";
// import RegisterItem from '../Components/RegisterItem'
// import LoginItem from '../Components/LoginItem'

export const Home = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>My PortFolio Website</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Home;
