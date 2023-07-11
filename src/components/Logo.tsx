import React from "react";
import me from "../assets/images/me.svg";
import css from "../styles/Logo.module.scss";

const Logo = () => {
  return (
    <div className={css["logo-container"]}>
      <img src={me} alt="logo" />
    </div>
  );
};

export default Logo;
