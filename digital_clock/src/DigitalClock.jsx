import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // The callback function within useEffect sets up a timer (setInterval) that updates the time state every second (1000 milliseconds).
  useEffect(() => {
    // setInterval(() => { setTime(new Date()); }, 1000); updates the time state with the current date and time every second.
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // The cleanup function (return () => { clearInterval(intervalId); };) clears the interval when the component is unmounted to avoid memory leaks.
    return () => {
      clearInterval(intervalId);
      // The empty dependency array [] ensures this effect runs only once when the component mounts.
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    // converts 24-hour format to 12-hour format
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  // add a leading zero to single-digit numbers
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
