import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(60);

  const countId = useRef();

  const handleStart = () => {
    countId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(countId.current);
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <h1>{count}</h1>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App;
