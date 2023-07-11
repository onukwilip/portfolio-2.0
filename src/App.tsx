import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./components/Menu";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="app">
      <Logo />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;