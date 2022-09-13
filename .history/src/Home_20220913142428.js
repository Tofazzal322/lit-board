import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scroll from './Scroll';

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={9} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={3} fluid className=" date-time">
          <DateTime></DateTime>
        </Col>
      </Row>
      <Scroll
    </div>
  );
};

export default Home;