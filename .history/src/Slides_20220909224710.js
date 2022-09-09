import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";

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
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRGnfPC-_9O8k6WuHld1NOM4cGwnjeLO8xpZioC2Dxh-VXSyFfqC2NM6FnEd_Vjxw/embed?showinfo=0&controls=0&start=true&loop=true&delayms=5000"
          width="620"
          height="420"
          allowfullscreen="true"
          transparent="100"
          mozallowfullscreen="true"
          frameBorder="0"
        ></iframe>
      </Row>
      <Row className="footer mt-2">
        <h4 className="bg-danger footer ">Footer</h4>
      </Row>
    </section>
  );
};

export default Slides;
