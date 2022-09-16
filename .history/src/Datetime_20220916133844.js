import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const DateTime = () => {
  const [ltiDays, setLtiDays] = useState("Aug 3, 2022");
  let interval = useRef();
  let showDate = new Date();

  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  const previousBest = 1610 + "  " + "Days";
  const lastAccident = "03/08/2022";

  const startDays = () => {
    const countDays = new Date("Aug 3, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - countDays;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop count
        clearInterval(interval.current);
      } else {
        setLtiDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    startDays();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div>
        <h6 className="text-center heading-decoration mb-2 pt-2 pt-2 mt-2">
          HSE STATISTIC BOARD
        </h6>
      </div>
      <Container >
        <Row className="row-decoration">
          <Col md={6} xs={12} className="">
            <h5 className="title-decoration pt-1 mt-2">TODAY'S DATE</h5>
          </Col>
          <Col md={6} xs={12} fluid className="">
            
                 <input
              className="text-center text-decoration text-color"
              type="text"
              value={displayTodaysDate}
              readOnly="true"
              overFollow="hidden"
            />
     
          </Col>
        </Row>
        <Row className="mt-4 row-decoration">
          <Col md={6} xs={12} className="">
            <div>
              <h5 className="best text-danger title-decoration mt-2 pt-2">DAYS WITHOUT LTI </h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-danger"
                type="text"
                value={ltiDays + ("  " + "Days")}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4 row-decoration">
          <Col md={6} xs={12} className="">
            <div >
              <h5 className="text-color title-decoration mt-2">DATE LAST ACCIDENT</h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-color"
                type="text"
                value={lastAccident}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4 row-decoration">
          <Col md={6} xs={12} className="">
            <div>
              <h5 className="text-color title-decoration mt-2">PREVIOUS BEST </h5>
            </div>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mt-2">
              <input
                className="text-center text-decoration text-color"
                type="text"
                value={previousBest}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} >
<img className="hse-logo " src="https://s3.amazonaws.com/sdxuk-uploads/kKKSsf0g0336ia2hnASpPSdmm85Jbq7S5dh827rb7kRtw1llSdwra0okRsd.jpg" alt="" />
          </Col>
          <Col>
            <img src="data:image/jpeg;base64,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" alt="" />
          </Col>
          <Col md={6} xs={12} className="mt-5">
<img className="sodexo-logo  pt-5 mt-5" src="https://www.sodexojobs.co.uk/application/assets/20/images/logo.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DateTime;
