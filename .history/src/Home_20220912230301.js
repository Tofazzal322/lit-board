import React from 'react';
import DateTime from './Datetime';
import Slides from "./Slides";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={7} className="slides-bg">
          <Slides></Slides>
        </Col>
        <Col xs={5} fluid className=" date-time">
          <DateTime>
                <iframe src="https://drive.google.com/file/d/1_G91iYgwsXV-UC1ndFi5XvjQIjVbZylj/preview" width="640" height="480" allow="autoplay"></iframe>
          </DateTime>
        </Col>
      </Row>
    </div>
  );
};

export default Home;