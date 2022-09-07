import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col className="w-75 bg-success">
          <div className="bg-color "> Width 75</div>
        </Col>
        <Col className="w-25">
          <div className="bg-color "></div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;