import React from "react";
import Website from "./components/website";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import About from "./components/about/about";
import Services from "./components/services/services";
import Error from "./components/error";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="services" element={<Services />} />
        <Route path="/" element={<Website />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
