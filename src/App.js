import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import styles from "./pages/index.module.scss";

function App() {
  return (
    <div className="App" style={styles}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
