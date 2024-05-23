import React, { useState, useEffect } from "react";

const GameTime = ({ startTime, resetTime }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (startTime) {
      timer = setInterval(() => {
        if (seconds < 59) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
      }, 1000);
    }

    if (resetTime) {
      setMinutes(0);
      setSeconds(0);
    }

    return () => clearInterval(timer);
  }, [seconds, minutes, startTime, resetTime]);


  return { minutes, seconds };
};

export default GameTime;
