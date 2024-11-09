import React, { useEffect, useMemo } from "react";
import bigSplash from "../assets/images/big-splash.png";
import me from "../assets/images/me-2.svg";
import paintSplash from "../assets/images/paint-splash.svg";
import paintSplash2 from "../assets/images/paint-splash-2.svg";
import css from "../styles/Landing.module.scss";
import { gsap } from "gsap";
import { motion, Variants } from "framer-motion";
import useLoadImage from "../hooks/useLoadImage";
import Loader from "../components/Loader";
import { Button } from "@mui/material";
import CV from "../assets/images/CV.pdf";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  // HOOKS
  const bigSplashVariants = useMemo<Variants>(
    () => ({
      far: {
        y: -200,
        x: 200,
      },
      enter: {
        y: 0,
        x: 0,
      },
    }),
    []
  );
  const scaleVariants = useMemo<Variants>(
    () => ({
      small: {
        scale: 0,
      },
      big: {
        scale: 1,
      },
    }),
    []
  );
  const h1Variants = useMemo<Variants>(
    () => ({
      up: {
        y: -300,
        opacity: 0,
      },
      down: {
        y: 0,
        opacity: 1,
      },
    }),
    []
  );
  const spanVariants = useMemo<Variants>(
    () => ({
      down: {
        y: 300,
        opacity: 0,
      },
      up: {
        y: 0,
        opacity: 1,
      },
    }),
    []
  );
  const { loading } = useLoadImage({
    images: [bigSplash, me, paintSplash, paintSplash2],
  });
  const navigate = useNavigate();

  // FUNCTIONS
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
    setTimeout(
      () => window.addEventListener("mousemove", parallaxEffect),
      2000
    );

    return () => {
      window.removeEventListener("mousemove", parallaxEffect);
    };
  }, []);

  if (loading)
    return (
      <>
        <Loader isAnimating={loading} />
      </>
    );

  return (
    <div className={css.landing}>
      <div className={css["right"]}>
        <motion.img
          variants={bigSplashVariants}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          initial="far"
          animate="near"
          src={bigSplash}
          className={`${css["big-splash"]} parallax`}
          alt="big-splash"
          data-speedz={0.01}
        />
        <motion.img
          src={me}
          variants={scaleVariants}
          transition={{
            delay: 0.7,
          }}
          initial="small"
          animate="big"
          className={`${css["me"]} parallax`}
          alt="me"
          data-speedz={0.05}
        />
        <motion.img
          variants={scaleVariants}
          transition={{
            delay: 1.0,
          }}
          initial="small"
          animate="big"
          src={paintSplash}
          className={`${css["paint-splash"]} parallax`}
          alt="paint-splash"
          data-speedz={0.09}
        />
        <motion.img
          variants={scaleVariants}
          transition={{
            delay: 1.5,
          }}
          initial="small"
          animate="big"
          src={paintSplash2}
          className={`${css["paint-splash-2"]} parallax`}
          alt="paint-splash-2"
          data-speedz={0.1}
        />
      </div>
      <div className={css["heading"]}>
        <div className={css["text"]}>
          <motion.h1
            variants={h1Variants}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            initial="up"
            animate="down"
          >
            Hello👋🏾! I'm <span>Prince</span>
          </motion.h1>
          <motion.span
            variants={spanVariants}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            initial="down"
            animate="up"
          >
            A software developer with extensive experience developing enterprise
            software in Agile and DevOps environments
            <br />
            <br />
            <div className={css.actions}>
              <a href={CV} download={"Prince CV"}>
                <Button
                  variant="outlined"
                  size="large"
                  // color="white"
                  className={css.btn}
                  startIcon={
                    <>
                      <i className="fa-solid fa-download"></i>
                    </>
                  }
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="outlined"
                size="large"
                // color="white"
                className={css.btn}
                startIcon={
                  <>
                    <i className="fa-solid fa-sack-dollar"></i>
                  </>
                }
                onClick={() => navigate("/contact")}
              >
                Hire me
              </Button>
            </div>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
