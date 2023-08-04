import React, { FC } from "react";
import css from "../styles/Achievements.module.scss";
import bigSplash from "../assets/images/big-splash.png";
import gopackImg from "../assets/images/GOPack.gif";
import nigtrakImg from "../assets/images/nigtrak.png";
import goitImg from "../assets/images/goit-web.png";
import lendSQRImg from "../assets/images/lend-sqr-dashboard.png";
import goCyclopedia from "../assets/images/GOCyclopaedia.png";
import threeJsMLImg from "../assets/images/three-js-ml-practice.png";
import mdHubImg from "../assets/images/Manassel-data-hub.png";
import onlineAuctionImg from "../assets/images/online-auction-img.png";
import { AchievementClass, ProjectClass } from "../utils";

const achievements: AchievementClass[] = [
  new AchievementClass(
    gopackImg,
    "GOPack",
    `Utilized technologies like Webpack, Node Js and Babel to develop a JavaScript bundling software. The product supports multiple javascript libraries like Typescript, Vue.Js, React.Js, jQuery, Angular.Js, etc`,
    [`Webpack`, `Node Js`, `Babel Js`, "Typescript"],
    [`https://github.com/onukwilip/gopack`, `https://gopack.vercel.app/`],
    css["gopack-project"]
  ),
  new AchievementClass(
    nigtrakImg,
    "NigTrak",
    `Utilized tools like MQTT, React Js, Google maps etc. to develop a real-time tracking software and inventory system, which tracks registered personnel and their assigned gadgets around the world in real-time via the application installed on their device.`,
    [
      `React Js`,
      "SCSS",
      `Redux Js`,
      `Node Js`,
      `MQTT`,
      `Google maps API`,
      "Typescript",
    ],
    [
      `https://github.com/onukwilip/NigTrak/tree/adding-typescript`,
      `https://nigtrak.netlify.app/`,
    ],
    // window.innerWidth < 308 ? css["nigtrak-project"] : undefined,
    css["nigtrak-project"]
  ),
  new AchievementClass(
    onlineAuctionImg,
    "Online Auction",
    `Utilized Next Js for SSG and SSR which allows for better SEO optimization compared to React Js applications in the development of an online auctioning web application. Integrated the microservices architecture in which React.Js was used for the client side, Next.Js for the REST API development, MongoDB ATLAS, Redis and cloudinary for caching, database management and Docker for deploying to cloud containers`,
    [
      `React Js`,
      "SCSS",
      `Next Js`,
      `Redis`,
      `MongoDB`,
      `Cloudinary API`,
      `Docker`,
      "Typescript",
    ],
    [
      `https://github.com/onukwilip/onlineAuction`,
      `https://auction-app-s9qv.onrender.com/`,
    ],
    // window.innerWidth < 410 ? css["online-auction-project"] : undefined
    css["online-auction-project"]
  ),
];
const otherProjects: ProjectClass[] = [
  new ProjectClass(
    threeJsMLImg,
    "Material editor",
    "Developed a 3D web editor leveraging tools like Three Js, React three fiber and drei. The website mimmiks an ecommerce shop by giving the users ability to edit a product to their taste on an online editor, giving them a 3 dimensional preview of how the product would look like when ordered.",
    ["React Js", "SCSS", "Three Js", "Redux Js", "Web GL", "Typescript"],
    [
      "https://github.com/onukwilip/three-js-materials-and-leva-practice",
      "https://three-js-materials-and-leva-practice.vercel.app/",
    ],
    undefined,
    true
  ),
  new ProjectClass(
    goCyclopedia,
    "GOCyclopedia",
    "Leveraging tools like Three Js, React three fiber, GSAP and drei, I developed a space exploration website, which allows users to view our solar system in a 3 dimentional format (just like a video game).",
    ["React Js", "SCSS", "Three Js", "GSAP", "Web GL", "Typescript"],
    [
      "https://github.com/onukwilip/go-cyclopaedia",
      "https://go-cyclopaedia.vercel.app/",
    ],
    undefined,
    true
  ),
  new ProjectClass(
    mdHubImg,
    "Manassel Data Hub",
    "A website I designed for an organization so they could gain online visibility using technologies like React Js, SCSS and Three Js. With features like Email integration, customers who visit the website can easily contact the organization.",
    ["React Js", "Three Js", "GSAP", "SCSS", "Typescript"],
    ["https://github.com/onukwilip/md-hub", "https://md-hub.vercel.app/"],
    undefined,
    true
  ),
  new ProjectClass(
    lendSQRImg,
    "LendSQR",
    "A UI dashboard/website developed leveraging tools like React Js and SCSS for the frontend, Jest and React testing library for Unit and integration tests and Docker for deploying to containers.",
    ["React Js", "Three Js", "GSAP", "SCSS", "Jest", "Docker", "Typescript"],
    [
      "https://github.com/onukwilip/lendsqr-fe-test",
      "http://prince-c-onukwili-lendsqr-fe-test.netlify.app/",
    ],
    undefined
  ),
  new ProjectClass(
    goitImg,
    "GOIT",
    "A a website that was developed inorder to display my skills and services. (It was my previous portfolio).",
    ["HTML", "CSS", "Javascript", "Bootstrap"],
    [
      "https://github.com/onukwilip/GO-IT",
      "https://onukwilip.github.io/GO-IT/",
    ],
    undefined
  ),
];

const Achievement: FC<{ achievement: AchievementClass }> = ({
  achievement,
}) => {
  return (
    <div className={`${css.achievement} ${achievement.className}`}>
      <div className={css["img-container"]}>
        <img src={achievement.image} alt={achievement.name} />
      </div>
      <div className={css["content-container"]}>
        <div className={css["heading-container"]}>
          <span>Featured project</span>
          <a
            href={achievement.links[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.heading}>{achievement.name}</span>
          </a>
        </div>
        <div className={css.content}>{achievement.description}</div>
        <ul className={css.skills}>
          {achievement.skills.map((skill, i) => (
            <li key={i}>
              <code>{skill}</code>
            </li>
          ))}
        </ul>
        <div className={css["links"]}>
          <a
            href={achievement.links[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a
            href={achievement.links[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
const Project: FC<{ project: ProjectClass }> = ({ project }) => {
  return (
    <div className={css["project"]}>
      <div className={css["img-container"]}>
        {project.is3D && <span className={css.threeD}>3D</span>}
        <img src={project.image} alt={project.name} />
        <div className={css["links"]}>
          <a href={project.links[0]} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a href={project.links[1]} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
          </a>
        </div>
      </div>
      <div className={css["content-container"]}>
        <a
          href={project.links[0]}
          target="_blank"
          className={css.heading}
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
        <div className={css.content}>{project.description}</div>
        <ul className={css.skills}>
          {project.skills.map((skill, i) => (
            <li>#{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section className={css.achievements}>
      <img className={css.bg} src={bigSplash} alt="Splash" />
      <div className={css["achievements-container"]}>
        <h2 className={css["heading"]}>
          Here are some of my latest achievements <span></span>
        </h2>
        <div className={css["projects"]}>
          {achievements.map((achievement, i) => (
            <Achievement achievement={achievement} key={i} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={css["projects-container"]}>
        <h2 className={css["heading"]}>
          <span></span> Other noteworthy projects
        </h2>
        <div className={css.projects}>
          {otherProjects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
