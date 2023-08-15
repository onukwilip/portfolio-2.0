import React from "react";
import css from "../styles/SocialIcons.module.scss";
import { socialIcons } from "../pages/Contact";
import { useLocation } from "react-router-dom";

const SocialIcons = () => {
  const location = useLocation();

  //   console.log("Location", location);

  if (location.pathname === "/contact") return <></>;

  return (
    <nav className={css["social-icons"]}>
      {socialIcons.map((socialIcon, i) => (
        <a
          className={css["social-icon"]}
          href={socialIcon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {typeof socialIcon.icon === "string" ? (
            <i className={socialIcon.icon} />
          ) : (
            socialIcon.icon
          )}
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;
