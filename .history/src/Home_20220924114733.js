import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scroll from './Scroll';
import SiteBuilding from './SiteBuilding';

const Home = () => {

  return (
    <div className="home">
  
{/* <SiteBuilding></SiteBuilding> */}
      
      <Row>
        <Col md={8} xs={8} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={4} className=" date-time">
          <DateTime></DateTime>
        </Col>
      </Row>
      <Row className="mt-2 scroll-component">
        <Scroll></Scroll>
        </Row>
      
    </div>
  );
};

export default Home;