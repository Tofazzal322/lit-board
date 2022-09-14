import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const SiteBuilding = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <span style={{ color: "blue", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["The site is under maintenance! Please stay tuned."]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </span>
      <h5> Develop & Maintain by </h5>
      <h4>Tofazzal Hossain</h4>
      <small> Maintenance Supervisor</small>
    </div>
  );
};

export default SiteBuilding;
