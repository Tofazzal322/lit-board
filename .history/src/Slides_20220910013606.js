import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Iframe from "react-iframe";

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
        <h2 className="profile-text">COMPANY PROFILE</h2>
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
      <Row className="  ms-1  mt-2">
        <Col xs={3} className="latest-news">
          <div>
          <h5 className="latest-news-text"> <small className="latest">Latest</small> <small className="news">News</small></h5>
        </div>
        </Col>
        <Col xs={9} className="footer">
          <Marquee
          className="text-light marquee-text ms-0 ps-0 h-100"
          speed="30"
          delay="2"
          gradientWidth="200"
        >
            <span className="scroll-text">I can be a React component," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis nemo animi dicta quasi eum laboriosam,
              
              <span className="2ndpart"> laudantium reprehenderit. Maxime quisquam est similique. Accusamus perferendis fugit reiciendis quam veritatis officia explicabo?</span> </span>
        </Marquee>
        </Col>
    
      </Row>
    </section>
  );
};

export default Slides;
