// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  console.log(isRunning, time);
  useEffect(() => {
    console.log('useEffect begun');
    let timeoutID;
    
    if(isRunning){
      console.log('timer created');
      timeoutID = setInterval(()=>{
        setTime((prevTime) => prevTime + 1);
        console.log('time increased');
      },1000);
    } 

     return () =>{
       clearInterval(timeoutID);
       console.log('timer cleared', timeoutID);
    }
  }, [isRunning])
  
  const handleStart = () =>{
    setIsRunning(true);
    console.log('isRunning changed');
  }

  const handleStop = () =>{
    setIsRunning(false);
    console.log('isRunning changed');

  }

  const handleReset = () =>{
    setTime(0);
    setIsRunning(false);
    console.log('isRunning changed');

    // clearTimeout(timeoutID);
  }
  console.log('component rendered');

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {Math.floor(time/(60))}:{(time%(60)< 10 ? '0': '')}{time%(60)}</p>
      {!isRunning && <button onClick={handleStart}>Start</button>}
      {isRunning && <button onClick={handleStop}>Stop</button>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
