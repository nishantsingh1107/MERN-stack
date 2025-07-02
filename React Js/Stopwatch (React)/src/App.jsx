import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        console.log("Timer running state changed", isTimerRunning);

        let intervalId = null;
        if (isTimerRunning) {
            intervalId = setInterval(() => {
                setTimeInSec((prev) => {
                    return prev + 1;
                });
            }, 1000);
        }

        return () => {
            console.log("Cleaning up interval...");
            clearInterval(intervalId);
        };
    }, [isTimerRunning]);

    const handlePause = () => {
        if (isTimerRunning) {
            setIsTimerRunning(false);
        }
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
    };

    const handleLap = () => {
        console.log("Lap time", timeInSec);
        setLaps((prev) => {
            const temp = [...prev];
            temp.push(timeInSec);
            return temp;
        });
    };

    const handleReset = () => {
        setTimeInSec(0);
        setIsTimerRunning(false);
        setLaps([]);
    };


    // const hours = Math.floor(timeInSec / 3600) // derived state variable
    //     .toString()
    //     .padStart(2, "0");

    // const minutes = Math.floor((timeInSec % 3600) / 60)
    //     .toString()
    //     .padStart(2, "0");

    // const seconds = (timeInSec % 60).toString().padStart(2, "0");


    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="container">
            <h2 className="time">{formatTime(timeInSec)}</h2>
            <div className="buttons">
                {isTimerRunning ? <button onClick={handlePause} className="pause">PAUSE</button> : <button onClick={handlePlay} className="play">PLAY</button>}
                <button onClick={handleLap} className="lap">LAP</button>
                <button onClick={handleReset} className="reset">RESET</button>
            </div>
            <div className="laps">
                <h3>Laps</h3>
                {laps.length === 0 ? (
                    <p className="no-laps">No laps yet</p>
                ) : (
                    laps.map((elem, idx) => (
                        <div key={idx} className="lap-item">
                            <span>Lap {idx + 1} </span>
                            <span>{formatTime(elem)}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default App;