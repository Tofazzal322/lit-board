import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Iframe from "react-iframe";

const Slides = () => {
  const PPTUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQ2-4QfSx4e-VGnwndlqWfH3YJWgHktzValkW5F9hprP3qpTvLErYShNVMyFkSPig/embed?start=true&loop=true&delayms=5000";


  return (
    <section className="ms-3">
      <Row className="pt-2 ms-1 mt-2 text-center profile">
        <h2 className="profile-text">COMPANY PROFILE</h2>
      </Row>
      <Row className="responsive ">
        <div className="ms-1">
          <Iframe
            src={PPTUrl}
            width="800px"
            height="600px"
            allowfullscreen="true"
            transparent="100"
            frameBorder="0"
          ></Iframe>
        </div>
      </Row>
      
    </section>
  );
};

export default Slides;
