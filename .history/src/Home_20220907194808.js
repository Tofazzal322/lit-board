import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col >
          
           <DateTime></DateTime>
          
        </Col>
        <Col >
          <div className="bg-color ">
            <Slides></Slides>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;