import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import About from "./pages/About";
import React, { useEffect, useState, Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="app">
      <Logo />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPageWrapper />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Menu />
    </div>
  );
}

const AboutPageWrapper = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  const fetchComponent = async () => {
    await import("./pages/About");
    setLoadingPage(false);
  };

  useEffect(() => {
    fetchComponent();
  }, []);

  if (loadingPage) return <Loader isAnimating={loadingPage} />;
  return (
    <>
      <About />
    </>
  );
};

export default App;
