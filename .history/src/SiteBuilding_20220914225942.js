import React from "react";
import { Typewriter } from 'react-simple-typewriter'

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
          cursorStyle="_"
          typeSpeed={200}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </span>
        
      </h1>
      
          <h5> 
          <span style={{ color: "red", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Develop & Maintain by"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
              </span>
                <span style={{ color: "", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
                  <Typewriter
                      className="text-warning"
          words={["Tofazzal Hossain"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
              </span>

          </h5>
         
          
          
          {/* <div className="image">
               <img src="https://cdn.dribbble.com/users/1211277/screenshots/6000292/media/8a2a99e2bc7eb342dc0d5cabca0d6399.gif" alt="" />
         </div> */}
    </div>
  );
};

export default SiteBuilding;
