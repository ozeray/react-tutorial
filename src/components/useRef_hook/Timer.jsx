import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [sec, setSec] = useState(0);
  const intervalRef = useRef(null);

  const handleTimer = () => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
  };

  useEffect(() => {
    handleTimer();

    // Use this return to clean up the interval when the component is unmount:
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="demo">
      <h2>
        Using useRef hook to persist a timer interval for stop/resume function
      </h2>
      <p>{sec} seconds</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
      <button onClick={handleTimer}>Resume Timer</button>
    </div>
  );
};

export default Timer;
