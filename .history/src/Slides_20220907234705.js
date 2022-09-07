import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Slides = () => {

    const linkToPPTFile="https://encycolorpedia.com/companies/france/sodexo.png"
  return (
    <div className="pt-5 ps-5 ms-5 ">
      <Col className="w-75">
        <Carousel>
          <Carousel.Item>
            <h1>Company Details</h1>
            <h4>Name of Company: SOCAT L.L.C</h4>
            <h4>Address P.O. Box 232, Code 111 CPO</h4>
            <h4>Sultanate of Oman</h4>
            <h4>Location: Medinat Qaboos</h4>
            <h4>NTel # (968) 24400700</h4>
            <h4>Fax # (968) 24400777</h4>
            <h4>E mail socat@omantel.net.om</h4>

            <h2>Name of key persons to Contact:</h2>
            <h5>Mr. Erwan Harb General Manager</h5>
            <h5>Ms. Noora Al Balushi HR. Director</h5>
            <h5>Mr. Michel Maalouf Business Development</h5>
            <h5>Mr. Prakash Lakhani Finance Director</h5>
            <h5>Mr. Jacob Daniel Director Operations</h5>
            <h5>Mr. Rahul Asher IT Manager</h5>
            <h5>Mr. Leslie Kohlhoff A.M QHSE</h5>
          </Carousel.Item>
          <Carousel.Item>
      
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/rZ1jbjb/Screenshot-9.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </div>
  );
};

export default Slides;
