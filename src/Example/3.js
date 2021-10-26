import React, { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === -1) setTimer(5);

    return () => clearInterval(timerId);
  }, [timer]);

  return (
    <div className="App" style={{ margin: 100 }}>
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
