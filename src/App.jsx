// import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import { adjustSvgViewBox } from "./utils/portfolioScripts";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   adjustSvgViewBox();
  // }, []);
  // const projectRef = useRef(null);

  // useEffect(() => {
  //   if (projectRef.current) {
  //     projectRef.current.classList.add("slide-in-right");
  //   }
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
