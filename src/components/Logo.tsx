import React, { useMemo } from "react";
import me from "../assets/images/me.svg";
import css from "../styles/Logo.module.scss";
import { motion, Variants } from "framer-motion";

const Logo = () => {
  const variants = useMemo<Variants>(
    () => ({
      initial: {
        y: -100,
      },
      enter: {
        y: 0,
      },
    }),
    []
  );

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      className={css["logo-container"]}
    >
      <img src={me} alt="logo" />
    </motion.div>
  );
};

export default Logo;
