import React, { FC, useMemo, useState } from "react";
import css from "../styles/Menu.module.scss";
import me from "../assets/images/me.svg";
import { MenuClass } from "../utils";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuReducer, SelectorType } from "../types";

const menus: MenuClass[] = [
  new MenuClass("Home", "/", "fa-solid fa-person-shelter"),
  new MenuClass("About", "/about", "fa-regular fa-user"),
  new MenuClass("Skills", "/skills", "fa-brands fa-react"),
  new MenuClass("Experience", "/experience", "fas fa-briefcase"),
  new MenuClass("Achievements", "/achievements", "fas fa-trophy"),
  new MenuClass("Testimonials", "/testimonials", "fa-regular fa-face-smile"),
  new MenuClass("Contact", "/contact", "fa-regular fa-address-book"),
];

const EachMenu: FC<{ menu: MenuClass }> = ({ menu }) => {
  const [showLabel, setShowLabel] = useState(false);
  const navigate = useNavigate();

  const onMouseOver: React.MouseEventHandler<HTMLLIElement> = () => {
    if (window.innerWidth > 550) setShowLabel(true);
  };
  const onMouseOut: React.MouseEventHandler<HTMLLIElement> = () => {
    if (window.innerWidth > 550) setShowLabel(false);
  };
  const onClickHandler = (url: string) => {
    navigate(url);
  };

  return (
    <li
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClickHandler(menu.link)}
    >
      <i className={menu.icon}></i>
      <AnimatePresence>{showLabel && <span>{menu.name}</span>}</AnimatePresence>
    </li>
  );
};

const Menu: FC = () => {
  const menuState: MenuReducer = useSelector<SelectorType>(
    (state) => state.menu
  ) as MenuReducer;

  const variants = useMemo<Variants>(() => {
    // if (window.innerWidth > 550)
    //   return {
    //     far: {
    //       x: -200,
    //     },
    //     enter: {
    //       x: 0,
    //     },
    //   };
    // else
    //   return {
    //     far: {
    //       y: 200,
    //     },
    //     enter: {
    //       y: 0,
    //     },
    //   };
    return {
      far: {
        x: -200,
      },
      enter: {
        x: 0,
      },
    };
  }, []);

  return (
    <div className={css["menu-container"]}>
      {window.innerWidth <= 550 ? (
        <>
          <AnimatePresence>
            {menuState.display === true && (
              <motion.div
                variants={variants}
                initial="far"
                animate="enter"
                transition={{
                  ease: "easeOut",
                }}
                exit="far"
                className={css["menu"]}
              >
                <img src={me} alt="logo" />
                <nav>
                  {menus.map((menu, i) => (
                    <>
                      <EachMenu menu={menu} key={i} />
                    </>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <motion.div
            variants={variants}
            initial="far"
            animate="enter"
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            className={css["menu"]}
            exit="far"
          >
            <img src={me} alt="logo" />
            <nav>
              {menus.map((menu, i) => (
                <>
                  <EachMenu menu={menu} key={i} />
                </>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Menu;
