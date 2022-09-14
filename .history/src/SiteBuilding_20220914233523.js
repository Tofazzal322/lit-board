import React from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const SiteBuilding = () => {

    const lotti [lot, SetLot]=useState()

  return (
    <div className="text-center mt-3 ">
      <h1 className="text-center ">
        <span style={{ color: "blue", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["The site is under maintenance! Please stay tuned."]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </span>
      </h1>
          <div className="develop">
              
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
