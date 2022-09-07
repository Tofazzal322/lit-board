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
        <h3 className="text-center mb-5 mt-2">
          HSE SAFETY STATISTIC BOARD
        </h3>
      </div>
      <Container >
        <Row className="row-decoration">
          <Col xs={6} className="">
            <h5 className="title-decoration pt-4 mt-2">TODAY'S DATE</h5>
          </Col>
          <Col xs={6} fluid className="">
            <input
              className="text-center text-decoration text-color"
              type="text"
              value={displayTodaysDate}
              readOnly="true"
            />
          </Col>
        </Row>
        <Row className="mt-4 row-decoration">
          <Col xs={6} className="">
            <div>
              <h5 className="best text-danger title-decoration mt-2">DAYS WITHOUT LTI<span class="material-symbols-outlined">
arrow_forward_ios
</span></h5>
            </div>
          </Col>
          <Col xs={6} className="">
            <div>
              <input
                className="text-center text-decoration text-danger"
                type="text"
                value={ltiDays + ("  " + "Days")}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4 row-decoration">
          <Col xs={6} className="">
            <div>
              <h5 className="text-color title-decoration mt-2">DATE LAST ACCIDENT</h5>
            </div>
          </Col>
          <Col xs={6} className="">
            <div>
              <input
                className="text-center text-decoration text-color"
                type="text"
                value={lastAccident}
              />
            </div>
          </Col>
        </Row>{" "}
        <Row className="mt-4 row-decoration">
          <Col xs={6} className="">
            <div>
              <h5 className="text-color title-decoration mt-2">DAYS PREVIOUS BEST </h5>
            </div>
          </Col>
          <Col xs={6} className="">
            <div>
              <input
                className="text-center text-decoration text-color"
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
