import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import About from "./pages/About";
import React, { useEffect, useState, Suspense } from "react";
import Loader from "./components/Loader";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="app">
      <Logo />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
