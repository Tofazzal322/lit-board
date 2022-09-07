import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Slides = () => {

    const linkToPPTFile="https://euc-powerpoint.officeapps.live.com/p/PowerPointFrame.aspx?PowerPointView=SlideShowView&ui=en-US&rs=en-US&WOPISrc=https%3a%2f%2fattachments.office.net%3a443%2fowa%2fwopi%2ffiles%2f36d5fd5b-9510-401a-985e-027894ee686f%40socat.com%2fAAMkADM2ZDVmZDViLTk1MTAtNDAxYS05ODVlLTAyNzg5NGVlNjg2ZgBGAAAAAAAwixjJcGz1TZqpjG7eAmDvBwCi2FmMDwkOQZ0ey.FzReWUAAAAAAEMAACi2FmMDwkOQZ0ey.FzReWUAABx2YZoAAABEgAQAM-bi2ZlIUdHtL7zWJ4f2oY%3d_cW3KJAyR2ggBAQAAAAA%3d%3fpostmessageorigin%3dhttps%253a%252f%252foutlook.office.com%252f%26ui%3den-US&&hh=1&mscc=1&sdr=1&&wdorigin=OWA-SXS&accloop=1&wdSlideId=450&wdModeSwitchTime=1662581223248"
  return (
      <div className="pt-5 ps-5 ms-5 ">
                <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
        width="100%"
        height="600px"
        frameBorder="0"
        title="slides"
      ></iframe>
      <Col className="w-75">
        <Carousel>
          <Carousel.Item>
            <h1>Company Details</h1>
            <h4>Name of Company: SOCAT L.L.C</h4>
            <h4>Address P.O. Box 232, Code 111 CPO</h4>
            <h4>Sultanate of Oman</h4>
            <h4>Location: Medinat Qaboos</h4>
            <h4>NTel # (968) 24400700</h4>
            <h4>Fax # (968) 24400777</h4>
            <h4>E mail socat@omantel.net.om</h4>

            <h2>Name of key persons to Contact:</h2>
            <h5>Mr. Erwan Harb General Manager</h5>
            <h5>Ms. Noora Al Balushi HR. Director</h5>
            <h5>Mr. Michel Maalouf Business Development</h5>
            <h5>Mr. Prakash Lakhani Finance Director</h5>
            <h5>Mr. Jacob Daniel Director Operations</h5>
            <h5>Mr. Rahul Asher IT Manager</h5>
            <h5>Mr. Leslie Kohlhoff A.M QHSE</h5>
          </Carousel.Item>
          <Carousel.Item>
      
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/rZ1jbjb/Screenshot-9.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </div>
  );
};

export default Slides;
