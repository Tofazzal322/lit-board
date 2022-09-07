import React from 'react';
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";


const Slides = () => {
    return (
        <div className='pt-5 ps-5 ms-5 mt-5'>
            <Col className="w-75">
          <Carousel>
            <Carousel.Item>
                        <h4 className="d-block w-100">
                            Company Details
 
Name of Company: 	SOCAT L.L.C
Address 	P.O. Box 232, Code 111 CPO
Sultanate of Oman
Location: Medinat Qaboos
Tel # 	(968) 24400700
Fax # 	(968) 24400777
E mail 	socat@omantel.net.om

Name of key persons to Contact:

Mr. Erwan Harb	 General Manager
Ms. Noora  Al Balushi    HR. Director
Mr. Michel Maalouf	 Business Development
Mr. Prakash Lakhani      Finance Director
Mr. Jacob Daniel 	 Director Operations
Mr. Rahul Asher	 IT Manager
Mr. Leslie Kohlhoff        A.M QHSE

            </h4>
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