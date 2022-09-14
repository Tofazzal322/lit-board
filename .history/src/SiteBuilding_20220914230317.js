import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SiteBuilding = () => {
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


    </div>
  );
};

export default SiteBuilding;
