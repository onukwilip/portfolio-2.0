import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Testimonial from "./pages/Testimonial";
import SocialIcons from "./components/SocialIcons";
import { useSelector } from "react-redux";
import { ModalReducer, SelectorType } from "./types";
import PopupModal from "./components/Modal";
import { createPortal } from "react-dom";

function App() {
  const modal = useSelector<SelectorType, ModalReducer>((state) => state.modal);
  return (
    <>
      {modal.display &&
        createPortal(
          <PopupModal element={modal.element}></PopupModal>,
          document.getElementById("portal") as Element
        )}

      <div className="app">
        <Logo />
        <SocialIcons />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Menu />
      </div>
    </>
  );
}

export default App;
