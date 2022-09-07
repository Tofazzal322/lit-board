import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Slides = () => {
  return (
    <div className="pt-5 ps-5 ms-5 mt-5">
      <Col className="w-75">
        <Carousel>
          <Carousel.Item>
            <h1>Company Details</h1>
            <h2>Name of Company: SOCAT L.L.C</h2>
            <h2>Address P.O. Box 232, Code 111 CPO</h2>
            <h2>Sultanate of Oman</h2>
            <h2>Location: Medinat Qaboos</h2>
            <h2>NTel # (968) 24400700</h2>
            <h2>Fax # (968) 24400777</h2>
            <h2>E mail socat@omantel.net.om</h2>

            <h1>Name of key persons to Contact:</h1>
            <h3>Mr. Erwan Harb General Manager</h3>
            <h3>Ms. Noora  Al Balushi    HR. Director
</h3>
            <h3>Mr. Michel Maalouf	 Business Development
</h3>
            <h3>Mr. Prakash Lakhani      Finance Director
</h3>
            <h3>Mr. Erwan Harb General Manager</h3>
            <h3>Mr. Erwan Harb General Manager</h3>
            <h3>Mr. Erwan Harb General Manager</h3>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/DtHMgvR/Screenshot-6.jpg"
              alt="Second slide"
            />
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
