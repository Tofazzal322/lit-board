import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col className="">
          <div className="bg-color ">
           <DateTime></DateTime>
          </div>
        </Col>
        <Col className="">
          <div className="bg-color ">
            
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;