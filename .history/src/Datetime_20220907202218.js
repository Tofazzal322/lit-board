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
        <h1 className="text-center mb-5 mt-2">
          HSE SAFETY STATISTIC BOARD
        </h1>
      </div>
      <Container fluid>
        <Row>
          <Col xs={2} className="w-25">
            <h2 className="">TODAY'S DATE</h2>
          </Col>
          <Col xs={2} className="w-25">
            <input
              className="h4 p-2 text-center text-color"
              type="text"
              value={displayTodaysDate}
              readOnly="true"
            />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col className="w-50">
            <div>
              <h2 className="best text-warning">DAYS WITHOUT LTI</h2>
            </div>
          </Col>
          <Col className="w-50 ">
            <div>
              <input
                className="h4 p-2 text-center text-danger"
                type="text"
                value={ltiDays + ("  " + "Days")}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4">
          <Col className="w-75">
            <div>
              <h2 className="best text-color">DATE LAST ACCIDENT</h2>
            </div>
          </Col>
          <Col className="w-25">
            <div>
              <input
                className="h4 p-2 text-center text-color"
                type="text"
                value={lastAccident}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4">
          <Col className="w-50">
            <div>
              <h2 className="best text-color">DAYS PREVIOUS BEST </h2>
            </div>
          </Col>
          <Col className="w-50">
            <div>
              <input
                className="h4 p-2 text-center text-color"
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

export default DateTime;
