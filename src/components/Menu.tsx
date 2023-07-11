import React, { FC, useState } from "react";
import css from "../styles/Menu.module.scss";
import me from "../assets/images/me.svg";
import { MenuClass } from "../utils";
import { motion, AnimatePresence, Variants } from "framer-motion";

const menus: MenuClass[] = [
  new MenuClass("Home", "/", "fa-solid fa-person-shelter"),
  new MenuClass("About", "/about", "fa-regular fa-user"),
  new MenuClass("Skills", "/skills", "fa-brands fa-react"),
  new MenuClass("Experience", "/experience", "fas fa-briefcase"),
  new MenuClass("Testimonials", "/testimonials", "fa-regular fa-face-smile"),
  new MenuClass("Contact", "/contact", "fa-regular fa-address-book"),
];

const EachMenu: FC<{ menu: MenuClass }> = ({ menu }) => {
  const [showLabel, setShowLabel] = useState(false);

  const onMouseOver: React.MouseEventHandler<HTMLLIElement> = () => {
    if (window.innerWidth > 550) setShowLabel(true);
  };
  const onMouseOut: React.MouseEventHandler<HTMLLIElement> = () => {
    if (window.innerWidth > 550) setShowLabel(false);
  };

  return (
    <li onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <i className={menu.icon}></i>
      <AnimatePresence>{showLabel && <span>{menu.name}</span>}</AnimatePresence>
    </li>
  );
};

const Menu: FC = () => {
  return (
    <div className={css["menu-container"]}>
      <div className={css["menu"]}>
        <img src={me} alt="logo" />
        <nav>
          {menus.map((menu, i) => (
            <>
              <EachMenu menu={menu} key={i} />
            </>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
