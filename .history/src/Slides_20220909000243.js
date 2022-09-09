import React from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";


const Slides = () => {

 
  return (
    <div className="pt-5 mt-2 pb-2 text-center profile">
      <h1>COMPANY PROFILE</h1>

      <div className="ps-1 ms-1 responsive ">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRGnfPC-_9O8k6WuHld1NOM4cGwnjeLO8xpZioC2Dxh-VXSyFfqC2NM6FnEd_Vjxw/embed?start=true&loop=true&delayms=5000"
        frameborder="0"
        width="870"
        height="525"
        allowfullscreen="true"
        transparent="100"
        mozallowfullscreen="true"
       
      ></iframe>
      </div>

    </div>
  );
};

export default Slides;
