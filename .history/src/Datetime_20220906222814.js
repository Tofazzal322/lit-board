import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Datetime = () => {
  let showdate = new Date();
  let displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();

  const previousBest = 1000 + "  " + "Days";
  const lastAccident = "12/05/2022";
  const accidentFree = 105 + " " + "Days";
  const safeManHours = 200 + " " + "Hours";

  const firstAid = 10 + "  " + "Person";



  
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
              value={displaytodaysdate}
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
                value={accidentFree}
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
