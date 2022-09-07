import React from 'react';
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";


const Slides = () => {
    return (
        <div className='p-2 m-5 mt-5'>
            <Col className="w-75">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/Fgzc9ss/Screenshot-8.jpg"
                alt="First slide"
              />
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