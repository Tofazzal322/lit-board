import React from 'react';

const Scroll = () => {
    return (
        <div>
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
        </div>
    );
};

export default Scroll;