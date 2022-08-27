import React from "react";
import { Routes, Route } from "react-router-dom";
import Website from "./components/website";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Website />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
