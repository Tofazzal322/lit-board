import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <Slides></Slides>
        </Col>
        <Col>
          <DateTime></DateTime>
        </Col>
      </Row>
    </div>
  );
};

export default Home;