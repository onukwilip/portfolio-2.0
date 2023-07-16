import React, { FC, useEffect, useMemo, useState, Suspense } from "react";
import paintSplash from "../assets/images/paint-splash.svg";
import paintSplash2 from "../assets/images/paint-splash-2.svg";
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
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    setTimeout(() => setShowServiceItemCanvas(true), 100);
  }, []);
  return (
    <>
      <motion.div
        variants={eachServiceVariants}
        exit={"small"}
        animate={"big"}
        initial={"small"}
        transition={{
          delay: index * 0.1,
        }}
        className={css["each-service"]}
      >
        {showServiceItemCanvas && (
          <Canvas shadows className={css["each-service-canvas"]}>
            <ServiceItems model={service.model} />
          </Canvas>
        )}
        <span>{service.name}</span>
      </motion.div>
    </>
  );
};

const About = () => {
  const { typedText, isTypingComplete } = useType(
    `I'm a seasoned software engineer with a track record of delivering
            high-quality software products. With two years of experience, I have
            developed a plethora of industry-level applications, including
            GOPack, NigTrak, and Online Auction. My problem-solving skills have
            led to elegant solutions that drive business results and empower
            users. I specialize in 3D web development using tools like Three Js,
            React Js, Next Js, and other frameworks, staying updated with the
            latest industry trends. Throughout my career, I have achieved a 90%
            customer satisfaction rate and consistently delivered projects
            within agreed timelines.`,
    3
  );
  const rightHeadingLineVariants = useMemo<Variants>(
    () => ({
      up: {
        y: -1000,
      },
      down: {
        y: 0,
      },
    }),
    []
  );
  const rightHeadingVariants = useMemo<Variants>(
    () => ({
      down: {
        y: 1000,
        ...(window.innerWidth > 480 ? { rotateZ: -90 } : { rotateZ: 0 }),
      },
      up: {
        y: "-50%",
        ...(window.innerWidth > 480 ? { rotateZ: -90 } : { rotateZ: 0 }),
      },
    }),
    []
  );

  return (
    <section className={css.about}>
      <div className={css.left}>
        <div className={css.heading}>
          <Canvas shadows>
            <AboutHeaderTextScene />
          </Canvas>
        </div>
        <div className={css.content}>
          <img src={smear2} alt="smear2" className={css.smear2} />
          <div className={css.description}>
            {typedText}
            {isTypingComplete && (
              <div>
                <Link to="/about/#services">Wanna know more?</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={css.right} id="services">
        <div className={css["right-heading-container"]}>
          <motion.div
            variants={rightHeadingVariants}
            initial={"down"}
            animate="up"
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
            animate="down"
            transition={{
              duration: 1,
              type: "tween",
            }}
          ></motion.div>
        </div>

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
