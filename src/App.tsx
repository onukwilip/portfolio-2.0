// import { Suspense } from "react";
// import Scene from "./components/scenes/FloorScene";
// import { Canvas } from "@react-three/fiber";
// import bg from "./assets/images/portfolio-bg-3.png";
// import laptopBg from "./assets/images/laptop-bg.svg";
// import LaptopScene from "./components/scenes/LaptopScene";

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
