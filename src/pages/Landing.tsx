import React from "react";
import { Suspense } from "react";
import Scene from "../components/scenes/FloorScene";
import { Canvas } from "@react-three/fiber";
import bg from "../assets/images/portfolio-bg-3.png";
import laptopBg from "../assets/images/laptop-bg-2.svg";
import LaptopScene from "../components/scenes/LaptopScene";
import css from "../styles/Landing.module.scss";

const Landing = () => {
  return (
    <div className={css.landing}>
      <img src={bg} className={css["bg"]} alt="background" />
      <div className={css["floor-container"]}>
        <Canvas>
          <Suspense fallback={"Loading..."}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className={css["laptop-container"]}>
        <img
          src={laptopBg}
          className={css["laptop-bg"]}
          alt="laptop-background"
        />
        <Canvas>
          <Suspense fallback={"Loading..."}>
            <LaptopScene />
          </Suspense>
        </Canvas>
      </div>
      <div className={css["heading"]}>
        <div className={css["text"]}>
          <h1>
            Hello👋🏾! I'm <span>Prince</span>
          </h1>
          <span>
            A software developer with about two years of experience developing
            industry level applications using the trending technologies
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
