import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className="App" style={{ margin: 100 }}>
      <Content />
      <button onClick={context.handleChangeTheme}>Change Theme</button>
    </div>
  );
}

export default App;
