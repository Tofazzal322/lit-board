import React from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const SiteBuilding = () => {





  return (
    <div className="text-center mt-3 ">
      <h1 className="text-center ">
        <span style={{ color: "blue", fontWeight: "bold" }}>
          <Typewriter
            words={["The site is under maintenance! Please stay tuned."]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </span>
      </h1>
          <div className="develop">
                                   <Player
  autoplay
  loop
  src="https://assets3.lottiefiles.com/packages/lf20_hntzYU.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
              
      <h5 className="text-danger">Develop & Maintain by</h5>
      <span style={{ color: "", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          className="text-warning"
          words={["Tofazzal Hossain"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
              </span>
  
       </div> 

 
    </div>
  );
};

export default SiteBuilding;
