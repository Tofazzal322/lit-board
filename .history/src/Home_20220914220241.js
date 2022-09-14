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
  
<SiteBuilding>
{/*       
      <Row>
        <Col xs={9} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={3} fluid className=" date-time">
          <DateTime></DateTime>
        </Col>
      </Row>
      <Row className="mt-4 scroll-component">
        <Scroll></Scroll>
        </Row> */}
      
    </div>
  );
};

export default Home;