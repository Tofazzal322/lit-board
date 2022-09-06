import React, { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Datetime = () => {
  const [ltiDays, setLtiDays] = useState("00");

  let interval = useRef();

  const startDays = () => {
    //const countDays = new Date("Sep 1,2022 00:00:00").getTime();
const countDays = new Date("Aug 1,2022").getDate();
    interval = setInterval(() => {

      const now = new Date().getTime();
      //const now = new Date().getDate()-1;
      const distance = countDays + now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //const days = Math.floor(distance );

      if (distance < 0) {
        //stop count
        clearInterval(interval.current);
      } else {
        setLtiDays(days);
      }
    }, 1000);
  };

  let showDate = new Date();
  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  const previousBest = 1000 + "  " + "Days";
  const lastAccident = "12/05/2022";

  useEffect(() => {
    startDays();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="bg">
      <Container className=" pt-3">
        <div className="mb-5 mt-3">
          <h1 className="text-center mb-5 text-color mt-3">
            HSE SAFETY STATISTIC BOARD
          </h1>
        </div>
        <Row className="mt-5">
          <Col className="w-50">
            <h1 className="text-color">TODAY'S DATE</h1>
          </Col>
          <Col>
            <input
              className="h1  p-2 text-center text-color"
              type="text"
              value={displayTodaysDate}
              readOnly="true"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div>
              <h1 className="best text-warning">WORK DAYS WITHOUT LTI</h1>
            </div>
          </Col>
          <Col>
            <div>
              <input
                className="h1 p-2 text-center text-danger"
                type="text"
                value={ltiDays +"  "+ "Days"}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4">
          <Col>
            <div>
              <h1 className="best text-color">DATE OF LAST ACCIDENT</h1>
            </div>
          </Col>
          <Col>
            <div>
              <input
                className="h1 p-2 text-center text-color"
                type="text"
                value={lastAccident}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4">
          <Col>
            <div>
              <h1 className="best text-color">PREVIOUS BEST </h1>
            </div>
          </Col>
          <Col>
            <div>
              <input
                className="h1 p-2 text-center text-color"
                type="text"
                value={previousBest}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Datetime;
