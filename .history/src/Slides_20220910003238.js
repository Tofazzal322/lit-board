import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Iframe from 'react-iframe'

const Slides = () => {
  return (
    // <div className="pt-5 mt-2 pb-2 text-center profile">
    //   <div className="pt-5 mt-2 pb-2 text-center profile">
    //     <h2>COMPANY PROFILE</h2>
    //   </div>

    //   <div className="responsive ">
    //     <iframe
    //       src="https://docs.google.com/presentation/d/e/2PACX-1vRGnfPC-_9O8k6WuHld1NOM4cGwnjeLO8xpZioC2Dxh-VXSyFfqC2NM6FnEd_Vjxw/embed?autoplay=0&showinfo=0&controls=0start=true&loop=true&delayms=5000"
    //       width="620"
    //       height="420"
    //       allowfullscreen="true"
    //       transparent="100"
    //       mozallowfullscreen="true"
    //       frameBorder="0"
    //     ></iframe>
    //   </div>
    //   <div className="footer">
    //     <h4>Footer</h4>
    //   </div>
    // </div>
    <section className="ms-3">
      <Row className="pt-5 ms-1 pb-2 mt-2 text-center profile">
        <h2>COMPANY PROFILE</h2>
      </Row>
      <Row className="responsive ">
        <div className="ms-1">
          <Iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRGnfPC-_9O8k6WuHld1NOM4cGwnjeLO8xpZioC2Dxh-VXSyFfqC2NM6FnEd_Vjxw/embed?showinfo=0&controls=0&start=true&loop=true&delayms=5000"
            width="623"
            height="420"
            allowfullscreen="true"
            transparent="100"
            mozallowfullscreen="true"
            frameBorder="0"
          ></Iframe>
        </div>
      </Row>
      <Row className="footer  ms-1  mt-2">
 <Marquee className="text-warning ms-0 ps-0 h-100" speed="50" delay="2"  >
  I can be a React component, multiple React components, or just some text.
        </Marquee>
        
        <marquee
    behavior='scroll'
    scrollamount='5'
    width='50%'
    direction='left'
          height='200px'
          className="marquee-text "
 >
    this is a news flash / I can be a React component, multiple React components, or just some text.....
</marquee>
        <h4 className="">Footer</h4>
      </Row>
    </section>
  );
};

export default Slides;
