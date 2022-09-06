import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DateTime = () => {
  const [ltiDays, setLtiDays] = useState("Aug 4, 2022");
  let interval = useRef();
  let showDate = new Date();

  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();
  
  const previousBest = 1000 + "  " + "Days";
  const lastAccident = "12/05/2022";

  const startDays = () => {
    const countDays = new Date("Aug 4, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - countDays;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop count
        clearInterval(interval.current);
      } else {
        setLtiDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    startDays();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="bg">
      
      <section>
        <h1>Video</h1>
      </section>
      
    </div>
  );
};

export default DateTime;
