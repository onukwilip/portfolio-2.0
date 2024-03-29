import React, { FC, useEffect, useMemo, useState, useRef } from "react";
import smear2 from "../assets/images/smear2.svg";
import css from "../styles/About.module.scss";
import { Canvas } from "@react-three/fiber";
import AboutHeaderTextScene from "../components/scenes/AboutHeaderTextScene";
import useType from "../hooks/useType";
import { ServiceClass, toRadians } from "../utils";
import { GamingLaptop } from "../components/scenes/GamingLaptop";
import { Cart } from "../components/scenes/ShoppingCart";
import { PaintPalette } from "../components/scenes/PaintPalette";
import { PaintBrush } from "../components/scenes/PaintBrush";
import ServiceItems from "../components/scenes/AboutServiceItemsScene";
import AboutContentEaselScene from "../components/scenes/AboutContentEaselScene";
import { motion, Variants, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Loader from "../components/Loader";

const services: ServiceClass[] = [
  new ServiceClass("Software development", {
    component: GamingLaptop,
    props: {
      position: [0.07, 0.05, 0],
      rotation: [toRadians(45), toRadians(-120), 0],
      scale: 0.03,
    },
  }),
  new ServiceClass("Ecommerce website development", {
    component: Cart,
    props: {
      position: [0, 0, 0],
      rotation: [toRadians(45), toRadians(-30), 0],
      scale: 0.15,
    },
  }),
  new ServiceClass("Product designing", {
    component: PaintPalette,
    props: {
      rotation: [toRadians(45), toRadians(-30), 0],
      scale: 0.65,
    },
  }),
  new ServiceClass("3D web development", {
    component: PaintBrush,
    props: { scale: 0.65 },
  }),
];

const aboutme = (
  <>
    I'm Prince Onukwili a software engineer with over two years of experience
    excelling in Agile and DevOps environments. I create immersive 2D and 3D app
    interfaces leveraging WebGL, Three Js, React Js, Typescript, Redux, Webpack
    and Next Js. I'm also capable of creating progressive web apps using Service
    workers, and implementing features like client-side caching, and
    web-notifications. My backend skills include Node/Express Js and C#.NET. My
    proficiency in Jira, Git, GitHub and GitHub Actions ensures smooth
    collaboration, CI/CD, conducting of sprints and progress tracking.
    Leveraging Jest, Playwright and Cypress i implement test driven development.
    I'm also knowledgeable on the Linux OS and Bash scripting. I'm familiar with
    Docker, Kubernetes for deploying app containers to cloud platforms like
    Google CLoud, Azure, etc, and monitoring deployed applications metrics using
    Prometheus, and Grafana. With continuous learning, I provide impactful
    solutions for users and business success.
  </>
);

const EachServiceItem: FC<{ service: ServiceClass; index: number }> = ({
  service,
  index,
}) => {
  const [showServiceItemCanvas, setShowServiceItemCanvas] = useState(false);
  const eachServiceVariants = useMemo<Variants>(
    () => ({
      small: {
        scale: 0,
      },
      big: {
        scale: 1.3,
      },
    }),
    []
  );
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const animate = window.innerWidth > 1100 ? "big" : controls;

  useEffect(() => {
    setTimeout(() => setShowServiceItemCanvas(true), 100);
  }, []);
  useEffect(() => {
    if (inView) controls.start("big");
  }, [ref, inView, controls]);

  return (
    <>
      <motion.div
        variants={eachServiceVariants}
        exit={"small"}
        animate={animate}
        ref={ref}
        initial={"small"}
        transition={
          window.innerWidth > 1100
            ? {
                delay: index * 0.1,
              }
            : undefined
        }
        className={css["each-service"]}
      >
        {showServiceItemCanvas && (
          <Canvas
            shadows
            className={css["each-service-canvas"]}
            style={{ pointerEvents: "none" }}
          >
            <ServiceItems model={service.model} />
          </Canvas>
        )}
        <span>{service.name}</span>
      </motion.div>
    </>
  );
};

const About: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const rightHeadingLineVariants = useMemo<Variants>(
    () => ({
      up: {
        ...(window.innerWidth <= 480
          ? { x: -100 }
          : window.innerWidth <= 1100
          ? {}
          : { y: -1000 }),
      },
      down: {
        ...(window.innerWidth <= 480
          ? { x: 0 }
          : window.innerWidth <= 1100
          ? {}
          : { y: 0 }),
      },
    }),
    []
  );
  const rightHeadingVariants = useMemo<Variants>(
    () => ({
      down: {
        ...(window.innerWidth <= 480
          ? { x: 100, rotateZ: 0, y: "-50%" }
          : window.innerWidth <= 1100
          ? { rotateZ: -90, y: "-50%" }
          : { y: 1000, rotateZ: -90 }),
      },
      up: {
        ...(window.innerWidth <= 480
          ? { x: 0, rotateZ: 0, y: "-50%" }
          : window.innerWidth <= 1100
          ? { rotateZ: -90, y: "-50%" }
          : { y: "-50%", rotateZ: -90 }),
      },
    }),
    []
  );
  const rightHeadingContainerVariants = useMemo<Variants>(
    () => ({
      far: {
        ...(window.innerWidth <= 480
          ? {}
          : window.innerWidth <= 1100
          ? { x: -200 }
          : {}),
      },
      near: {
        ...(window.innerWidth <= 480
          ? {}
          : window.innerWidth <= 1100
          ? { x: 0 }
          : {}),
      },
    }),
    []
  );
  const paintVariants = useMemo<Variants>(
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
  const descriptionVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: 500 },
      displayed: { opacity: 1, y: 0 },
    }),
    []
  );
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [rightHeadingLineRef, rightHeadingLineIsInView] = useInView();
  const rightHeadingLineControl = useAnimation();
  const [rightHeadingRef, rightHeadingIsInView] = useInView();
  const rightHeadingControl = useAnimation();
  const rightHeadingContainerControl = useAnimation();

  const rhAnimation = window.innerWidth <= 1100 ? rightHeadingControl : "up";
  const rhlAnimation =
    window.innerWidth <= 1100 ? rightHeadingLineControl : "down";
  const rhcAnimation =
    window.innerWidth <= 1100 ? rightHeadingContainerControl : "near";

  const scrollToServices = () => {
    if (!servicesRef.current) return;

    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const animateServicesItems = () => {
    const serviceDistanceFromTop =
      servicesRef.current?.getBoundingClientRect().top;

    if (serviceDistanceFromTop !== undefined && serviceDistanceFromTop < 600) {
      rightHeadingContainerControl.start("near");
    }
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (document.readyState === "complete") handleLoading();

    window.addEventListener("load", handleLoading);

    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  useEffect(() => {
    const abboutElement = aboutRef.current;
    aboutRef.current?.addEventListener("scroll", animateServicesItems);
    return () => {
      abboutElement?.removeEventListener("scroll", animateServicesItems);
    };
  }, [aboutRef.current]);

  useEffect(() => {
    if (rightHeadingLineIsInView) {
      rightHeadingLineControl.start("down");
    }

    if (rightHeadingIsInView) {
      rightHeadingControl.start("up");
    }
  }, [
    rightHeadingControl,
    rightHeadingLineControl,
    rightHeadingIsInView,
    rightHeadingLineIsInView,
  ]);

  if (isLoading)
    return (
      <>
        <Loader isAnimating={true} />
      </>
    );

  return (
    <section className={css.about} ref={aboutRef} style={{ ...(style || {}) }}>
      <div className={css.left}>
        <div className={css.heading}>
          <Canvas shadows>
            <AboutHeaderTextScene />
          </Canvas>
        </div>
        <div className={css.content}>
          <motion.img
            src={smear2}
            variants={paintVariants}
            initial="small"
            animate="big"
            transition={{ type: "spring", mass: 1, duration: 0.2 }}
            alt="smear2"
            className={css.smear2}
          />
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate="displayed"
            className={css.description}
            transition={{ duration: 0.7, type: "keyframes", delay: 1.4 }}
          >
            {aboutme}
            <div className={css["action-container"]}>
              <Link
                className={css.action}
                to="/about/#services"
                onClick={scrollToServices}
              >
                Wanna know more?
              </Link>
            </div>
            <br />
          </motion.div>
        </div>
      </div>
      <div className={css.right} ref={servicesRef} id="services">
        <motion.div
          variants={rightHeadingContainerVariants}
          initial="far"
          animate={rhcAnimation}
          className={css["right-heading-container"]}
          transition={{
            type: "tween",
          }}
        >
          <motion.div
            variants={rightHeadingVariants}
            initial={"down"}
            animate={rhAnimation}
            ref={rightHeadingRef}
            transition={{
              duration: 1,
              type: "tween",
            }}
            className={css["right-heading"]}
          >
            WHAT I DO
          </motion.div>
          <motion.div
            className={css["right-heading-line"]}
            variants={rightHeadingLineVariants}
            initial={"up"}
            animate={rhlAnimation}
            ref={rightHeadingLineRef}
            transition={{
              duration: 1,
              type: "tween",
            }}
          ></motion.div>
        </motion.div>

        <div className={css.services}>
          {services.map((service, i) => (
            <EachServiceItem service={service} index={i} />
          ))}
        </div>
      </div>
      <div className={css["easel-container"]}>
        <Canvas shadows>
          <AboutContentEaselScene />
        </Canvas>
      </div>
    </section>
  );
};

export default About;
