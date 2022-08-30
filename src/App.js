import React from "react";
import Website from "./components/website";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import About from "./components/about/about";
import Services from "./components/services/services";
import Error from "./components/error";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="/" element={<Website />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
