import React, { useMemo } from "react";
import me from "../assets/images/me.svg";
import css from "../styles/Logo.module.scss";
import { motion, Variants } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { MenuReducer, SelectorType } from "../types";
import { menuActions } from "../store/store";

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
  const menuState: MenuReducer = useSelector<SelectorType>(
    (state) => state.menu
  ) as MenuReducer;
  const dispatch = useDispatch();

  const toogleMenu = () => {
    if (menuState.display === true) dispatch(menuActions.hide());
    else dispatch(menuActions.show());
  };

  return (
    <>
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
      <div className={css["hamburger"]} onClick={toogleMenu}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </>
  );
};

export default Logo;
