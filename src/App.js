import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [counting, setCounting] = useState(false);
  const [display, setDisplay] = useState(`${sessionTime}:00`);
  const startStopCount = () => {
    setCounting(!counting);
  }
  
  useEffect(
    () => {
      var totalSeconds = sessionTime * 60;
      setInterval(setTime, 1000);
      function setTime() {
        if (counting) {
          totalSeconds -= 1;
          var seconds = pad(totalSeconds % 60);
          var minutes = pad(parseInt(totalSeconds / 60));
          setDisplay(`${minutes}:${seconds}`);
        }
      }
      function pad(val) {
        if (val.toString().length < 2) {
          return "0" + val.toString();
        } else {
          return val.toString();
        }
      }
    }
  )

  return (
    <div className="App">
      <div className="breakSessionWrapper">
        <div className="break">
          <label id="break-label" htmlFor="break-length">Break Length</label>
          <input id="break-length" value={breakTime}></input>
          <div className="incDecWrapper">
            <button id="break-increment" onClick={() => breakTime < 60 ? setBreakTime(breakTime + 1) : ''}>+</button>
            <button id="break-decrement" onClick={() => breakTime > 0 ? setBreakTime(breakTime - 1) : ''}>-</button>
          </div>
        </div>
        <div className="session">
          <label id="session-label" htmlFor="session-length">Session Length</label>
          <input id="session-length" value={sessionTime}></input>
          <div className="incDecWrapper">
            <button id="session-increment" onClick={() => sessionTime < 60 ? setSessionTime(sessionTime + 1) : ''}>+</button>
            <button id="session-decrement" onClick={() => sessionTime > 0 ? setSessionTime(sessionTime - 1) : ''}>-</button>
          </div>
        </div>
      </div>
      <div className="timerWrapper">
        <button className="reset">Reset</button>
        <div className="time-left">{display}</div>
        <button className="start_stop" onClick={() => startStopCount()}>Start/Stop</button>
      </div>
    </div >
  );
}

export default App;
