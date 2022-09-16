import React from "react";
import Row from "react-bootstrap/Row";
import Iframe from "react-iframe";
import Row from "react-bootstrap/Row";

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
          {/* <Iframe
            src={PPTUrl}
            width="800px"
            height="600px"
            allowfullscreen="true"
            transparent="100"
            frameBorder="0"
          ></Iframe> */}
          <Embed
            src={PPTUrl}
            width="100%" 
            height="100%"
            border="none"
               
          />
        </div>
      </Row>
      
    </section>
  );
};

export default Slides;
