import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    let startTime;
    let accumulatedTime = 0;
    if (running) {
      startTime = Date.now();
      interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        accumulatedTime += elapsedTime;
        setTime(accumulatedTime);
        startTime = currentTime;
      }, 100); // Update every 100 milliseconds instead of 10
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className='stopwatch'>
      <div className='numbers' style={{ marginBottom: '10px' }}>
        <span
          className='btn btn-floating white btn-large darken-4'
          style={{ fontWeight: 'bold', color: 'green', fontSize: '20px' }}
        >
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
        </span>
        min
        <span
          className='btn btn-floating white btn-large darken-2'
          style={{ fontWeight: 'bold', color: 'green', fontSize: '20px' }}
        >
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
        sec
        <span
          className='btn btn-floating white btn-large darken-0'
          style={{ fontWeight: 'bold', color: 'green', fontSize: '20px' }}
        >
          {('0' + Math.floor((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className='buttons'>
        <button
          className='btn green darken-2'
          style={{ marginRight: '2px' }}
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          className='btn red darken-2'
          style={{ marginRight: '2px' }}
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button className='btn blue darken-2' onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
