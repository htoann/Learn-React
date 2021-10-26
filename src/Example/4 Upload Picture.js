import React, { useEffect, useState } from "react";

function App() {
  const [avatar, setAvart] = useState("");

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  const handlePreview = (e) => {
    const file = e.target.files[0];

    setAvart(URL.createObjectURL(file));

    e.target.value = null;
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <input type="file" onChange={handlePreview} />
      {avatar && <img src={avatar} alt="" width="150" />}
    </div>
  );
}

export default App;
