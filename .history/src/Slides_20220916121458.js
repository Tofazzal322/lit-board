import React from "react";
import Row from "react-bootstrap/Row";
import Iframe from "react-iframe";


const Slides = () => {
  const PPTUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQ2-4QfSx4e-VGnwndlqWfH3YJWgHktzValkW5F9hprP3qpTvLErYShNVMyFkSPig/embed?start=true&loop=true&delayms=3000" ;


  return (
    <section className="ms-3">
      <Row className="pt-2 ms-1 mt-2 text-center profile">
        <h2 className="profile-text">COMPANY PROFILE</h2>
      </Row>
      <Row className="responsive ">
        <div className="slides">
          {/* <Iframe
            src={PPTUrl}
            width="1440" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
          ></Iframe> */}
          <embed
            src={PPTUrl}
            width="100%" 
            height="100%"
            border="none"
            allowfullscreen="true"  
            className=""
          />
        </div>
      </Row>
      
    </section>
  );
};

export default Slides;
