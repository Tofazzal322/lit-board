import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Slides = () => {

 
  return (
      <div className="pt-5 ps-1 ms-1 ">
     <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRGnfPC-_9O8k6WuHld1NOM4cGwnjeLO8xpZioC2Dxh-VXSyFfqC2NM6FnEd_Vjxw/embed?start=true&loop=true&delayms=3000" frameborder="0" width="800" height="800" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      
          <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
        width="100%"
        height="600px"
        frameBorder="0"
        title="slides"
      ></iframe>
    </div>
  );
};

export default Slides;
