import React, { useEffect } from "react";
import bigSplash from "../assets/images/big-splash.png";
import me from "../assets/images/me-2.svg";
import paintSplash from "../assets/images/paint-splash.svg";
import paintSplash2 from "../assets/images/paint-splash-2.svg";
import css from "../styles/Landing.module.scss";
import { gsap } from "gsap";

const Landing = () => {
  const parallaxEffect = (e: MouseEvent) => {
    const parallaxElements = document.getElementsByClassName(
      "parallax"
    ) as HTMLCollectionOf<HTMLImageElement>;
    const distanceFromX = e.clientX - window.innerWidth / 2;
    const distanceFromY = e.clientY - window.innerHeight / 2;

    Array.from(parallaxElements).forEach((elem) => {
      const speed = Number(elem.dataset.speedz);
      const zPosition =
        -distanceFromX * 0.5 * speed >= 0 ? -distanceFromX * 0.5 * speed : 0;
      gsap.to(elem, {
        transform: `translateX(${-distanceFromX * speed}px) translateY(${
          -distanceFromY * speed
        }px) ${window.innerWidth > 800 ? `translateZ(${zPosition}px)` : ""}`,
        animationFillMode: "forwards",
      });
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", parallaxEffect);

    return () => {
      window.removeEventListener("mousemove", parallaxEffect);
    };
  }, []);

  return (
    <div className={css.landing}>
      <div className={css["right"]}>
        <img
          src={bigSplash}
          className={`${css["big-splash"]} parallax`}
          alt="big-splash"
          data-speedz={0.01}
        />
        <img
          src={me}
          className={`${css["me"]} parallax`}
          alt="me"
          data-speedz={0.05}
        />
        <img
          src={paintSplash}
          className={`${css["paint-splash"]} parallax`}
          alt="paint-splash"
          data-speedz={0.09}
        />
        <img
          src={paintSplash2}
          className={`${css["paint-splash-2"]} parallax`}
          alt="paint-splash-2"
          data-speedz={0.1}
        />
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
