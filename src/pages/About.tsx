import React from "react";
import paintSplash from "../assets/images/paint-splash.svg";
import paintSplash2 from "../assets/images/paint-splash-2.svg";
import css from "../styles/About.module.scss";
import { Canvas } from "@react-three/fiber";
import AboutHeaderTextScene from "../components/scenes/AboutHeaderTextScene";
import AboutContentEaselScene from "../components/scenes/AboutContentEaselScene";

const About = () => {
  return (
    <section className={css.about}>
      <div className={css.left}>
        <img src={paintSplash} alt="splash1" className={css.splash1} />
        <img src={paintSplash2} alt="splash2" className={css.splash2} />
        <div className={css.heading}>
          <Canvas shadows>
            <AboutHeaderTextScene />
          </Canvas>
        </div>
        <div className={css.content}>
          <Canvas shadows>
            <AboutContentEaselScene />
          </Canvas>
        </div>
      </div>
      <div className={css.right}></div>
    </section>
  );
};

export default About;
