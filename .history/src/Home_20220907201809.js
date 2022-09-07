import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={7} className="bg-danger">
          <Slides></Slides>
        </Col>
        <Col xs={4} fluid className="bg-success h-100">
          <DateTime></DateTime>
        </Col>
      </Row>
    </div>
  );
};

export default Home;