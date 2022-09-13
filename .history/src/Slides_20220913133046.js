import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Iframe from "react-iframe";

const Slides = () => {
  const PPTUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQ2-4QfSx4e-VGnwndlqWfH3YJWgHktzValkW5F9hprP3qpTvLErYShNVMyFkSPig/embed?start=false&loop=true&delayms=3000";


  return (
    <section className="ms-3">
      <Row className="pt-3 ms-1 pb-2 mt-1 text-center profile">
        <h2 className="profile-text">COMPANY PROFILE</h2>
      </Row>
      <Row className="responsive ">
        <div className="ms-1">
          <Iframe
            src={PPTUrl}
            width="900"
            height="600"
            allowfullscreen="true"
            transparent="100"
            frameBorder="0"
          ></Iframe>
        </div>
      </Row>
      <Row className="  ms-1  mt-2">
        <Col xs={3} className="latest-news">
          <div>
            <h6 className="latest-news-text">
              <small className="latest">Our</small>{" "}
              <small className="news">Services</small>
            </h6>
          </div>
        </Col>
        <Col xs={9} className="footer">
          <Marquee
            className="text-light marquee-text ms-0 ps-0 h-100"
            speed="200"
            delay="2"
            gradientWidth="200"
          >
            <span className="scroll-text">
              " SOCAT's various services offered as part of Site Management
              includes :- Catering <span className="nd-part">|</span>{" "}
              Housekeeping <span className="nd-part">|</span> Cleaning{" "}
              <span className="nd-part">|</span> Laundry{" "}
              <span className="nd-part">|</span> Pest Control{" "}
              <span className="nd-part">|</span> Preventive Maintenance{" "}
              <span className="nd-part">|</span> Manpower supply{" "}
              <span className="nd-part">|</span> Gardening & Landscaping "
              <span className="nd-part2">
                " The above services cover all different segments in the country
                including : Oil & Gas <span className="nd-part">|</span>{" "}
                Hospitals <span className="nd-part">|</span> Schools{" "}
                <span className="nd-part">|</span> Defense{" "}
                <span className="nd-part">|</span> Business Institutions "
              </span>
          
            </span>
          </Marquee>
        </Col>
      </Row>
    </section>
  );
};

export default Slides;
