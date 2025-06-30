import { useState, useEffect } from "react";

const App = () =>{
  const [timeInSec, setTimeInSec] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    console.log("Timer Running state change", isTimerRunning);

    let intervalId = null;
    if(isTimerRunning){
      intervalId = setInterval(() => {
        setTimeInSec((prev) => {
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      console.log("Cleaning Up Interval...");
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const formatTime = (timeInSec) => {
    const hours = Math.floor(timeInSec / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((timeInSec % 3600) / 60).toString().padStart(2, "0");
    const seconds = (timeInSec % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };


  const handlePause = () => {
    if(isTimerRunning){
      setIsTimerRunning(false);
    }
  };

  const handlePlay = () => {
    if(!isTimerRunning){
      setIsTimerRunning(true);
    }
  };


  const handleLap = () => {
    setLaps((prev) => {
      const temp = [...prev];
      temp.push(timeInSec);
      return temp;
    });
  };

  const handleReset = () => {
    setTimeInSec(0);
    setIsTimerRunning(false);
  };

 

  return(
    <div className="stopwatch-container">
      <h2 className="time-display">
        {formatTime(timeInSec)}
      </h2>
      <div className="button-container">
        {isTimerRunning ? <button onClick={handlePause}>Pause</button> : <button onClick={handlePlay}>Play</button>}
        <button onClick={handleLap}>LAP</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <div className="lap-container">
        {laps.map((elem, index) => {
          return <p key={index}>Lap {index+1} : {formatTime(elem)}</p>
        })}
      </div>
    </div>
  );
};

export default App;