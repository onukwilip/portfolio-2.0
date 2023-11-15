import React, { FC, useMemo, useState, useEffect } from "react";
import css from "../styles/Achievements.module.scss";
import bigSplash from "../assets/images/big-splash.png";
import gopackImg from "../assets/images/GOPack.gif";
import freeCodeCampPRImg from "../assets/images/freeCodeCamp-pull-request.png";
import hacktoberfestBadgeImg from "../assets/images/hacktoberfest-badge.png";
import nigtrakImg from "../assets/images/nigtrak.png";
import goitImg from "../assets/images/goit-web.png";
import lendSQRImg from "../assets/images/lend-sqr-dashboard.png";
import goCyclopedia from "../assets/images/GOCyclopaedia.png";
import threeJsMLImg from "../assets/images/three-js-ml-practice.png";
import mdHubImg from "../assets/images/Manassel-data-hub.png";
import onlineAuctionImg from "../assets/images/online-auction-img.png";
import udemyLogo from "../assets/images/udemy.png";
import courseraLogo from "../assets/images/coursera-logo.png";
import reactJsCertificateImg from "../assets/images/react-certificate-1.png";
import mernStackCertificateImg from "../assets/images/mern-certificate -1.png";
import dsaCSharpCertificateImg from "../assets/images/data-structures-csharp-certificate-1.png";
import reactThreeFiberCertificateImg from "../assets/images/react-3-fiber-certification.png";
import devopsCertificateImg from "../assets/images/devops-capstone.png";
import containersCertificateImg from "../assets/images/docker-kubernetes-containerization-certification.png";
import agileCertificateImg from "../assets/images/intro-to-agile-development-certificate.png";
import introToCloudCertificateImg from "../assets/images/introduction-to-cloud-computing-certificate-1.png";
import cypressE2ETestingCertificateImg from "../assets/images/cypress-e2e-testing-certificate.jpg";
import { AchievementClass, CertificationClass, ProjectClass } from "../utils";
import * as rdd from "react-device-detect";
import { Variants, motion } from "framer-motion";
import Loader from "../components/Loader";

// trying to trigger redeploy

const achievements: AchievementClass[] = [
  new AchievementClass(
    freeCodeCampPRImg,
    "FreeCodeCamp",
    `Had the opportunity to contribute to the Freecodecamp project. I collaborated with others on the platform in the creation of E2E tests using Microsoft Playwright. Fixed merge conflicts by rebasing the feature branch to the main branch`,
    [`Playwright`, `React Js`, "JavaScript", "Git", "Open-source"],
    [
      `https://github.com/freeCodeCamp/freeCodeCamp/pull/52104`,
      `https://freecodecamp.org/`,
    ],
    css["gopack-project"]
  ),
  new AchievementClass(
    hacktoberfestBadgeImg,
    "Hacktoberfest 2023",
    `Leveled up in the ongoing Hacktoberfest programmme, by contributing to various open-source projects; the likes of Freecodecamp. I wrote E2E tests for the Freecodecamp’s website utilizing JavaScript and Playwright library 📚 `,
    [`Playwright`, `React Js`, `Next js`, "JavaScript", "Git", "Open-source"],
    [
      `https://www.holopin.io/hacktoberfest2023/userbadge/cloovsl7f311290gl3vjg6iy89`,
      `https://www.holopin.io/hacktoberfest2023/userbadge/cloovsl7f311290gl3vjg6iy89`,
    ],
    css["nigtrak-project"]
  ),
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
const certifications: CertificationClass[] = [
  new CertificationClass(
    "React.Js development",
    `UC-7532cd2f-b81d-4542-94a5-f3bf03972087`,
    `https://bit.ly/3HgG6MD`,
    reactJsCertificateImg,
    udemyLogo
  ),
  new CertificationClass(
    `React, NodeJS, Express & MongoDB - MERN`,
    `UC-7937db50-b59c-4389-8299-e4e6f3bd266a`,
    ` https://bit.ly/3n2Fgwc`,
    mernStackCertificateImg,
    udemyLogo
  ),
  new CertificationClass(
    `React three fiber`,
    `UC-14588fae-ba37-4b10-919d-1077f9f84abc`,
    `https://bit.ly/3K7U58V`,
    reactThreeFiberCertificateImg,
    udemyLogo
  ),
  new CertificationClass(
    "Cypress E2E testing",
    `UC-e04d1c7f-9459-4d8a-90de-d271a9f4a49e`,
    `https://bit.ly/3YtEXZr`,
    cypressE2ETestingCertificateImg,
    udemyLogo
  ),
  new CertificationClass(
    "Data structures and algorithms.: In depth in C#",
    `UC-7532cd2f-b81d-4542-94a5-f3bf03972087`,
    `https://bit.ly/41BSKOu`,
    dsaCSharpCertificateImg,
    udemyLogo
  ),
  new CertificationClass(
    `DevOps certification`,
    `AC6HCXR4SEM9`,
    `https://coursera.org/verify/AC6HCXR4SEM9`,
    devopsCertificateImg,
    courseraLogo
  ),
  new CertificationClass(
    `Agile project management`,
    `FTR5HDGKPCV5`,
    `https://coursera.org/verify/FTR5HDGKPCV5`,
    agileCertificateImg,
    courseraLogo
  ),
  new CertificationClass(
    `Managing containers with Docker and Kubernetes`,
    `RW39WBGMC63W`,
    `https://coursera.org/verify/RW39WBGMC63W`,
    containersCertificateImg,
    courseraLogo
  ),
  new CertificationClass(
    `Introduction to Cloud Computing`,
    `LA29LK8GQTNP`,
    `https://bit.ly/3QE08Gw`,
    introToCloudCertificateImg,
    courseraLogo
  ),
];

const Achievement: FC<{ achievement: AchievementClass; index: number }> = ({
  achievement,
  index,
}) => {
  const variants = useMemo<Variants>(
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

  return (
    <motion.div
      variants={variants}
      initial="down"
      whileInView="up"
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${css.achievement} ${achievement.className}`}
    >
      <div className={css["img-container"]}>
        <a
          href={achievement.links[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={achievement.image} alt={achievement.name} />
        </a>
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
    </motion.div>
  );
};
const Project: FC<{ project: ProjectClass; index: number }> = ({
  project,
  index,
}) => {
  const variants = useMemo<Variants>(
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

  return (
    <motion.div
      variants={variants}
      initial="small"
      whileInView="big"
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={css["project"]}
    >
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
    </motion.div>
  );
};
const Certification: FC<{
  certification: CertificationClass;
  index: number;
}> = ({ certification, index }) => {
  const variants = useMemo<Variants>(
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

  return (
    <>
      <motion.div
        variants={variants}
        initial="down"
        whileInView="up"
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`${css.certification} ${
          rdd.isMobile ? css["mobile-certification"] : ""
        }`}
      >
        <a
          href={certification["certificate-URL"]}
          target="_blank"
          rel="noreferrer"
          className={css["img-container"]}
        >
          <img
            src={certification["certificate-image"]}
            alt={certification["certificate-name"]}
          />
          <a
            href={certification["certificate-URL"]}
            target="_blank"
            rel="noreferrer"
            className={css["issued-by"]}
          >
            <img src={certification["certificate-issuedBy"]} alt={""} />{" "}
          </a>
        </a>
        <div className={css.content}>
          <a
            href={certification["certificate-URL"]}
            target="_blank"
            rel="noreferrer"
          >
            <img src={certification["certificate-issuedBy"]} alt={""} />{" "}
          </a>
          {window.innerWidth > 360 && (
            <>
              <br />
              <br />
            </>
          )}
          {Object.keys(certification)
            .filter(
              (key) =>
                key !== "certificate-image" && key !== "certificate-issuedBy"
            )
            .map((key) => (
              <>
                <li>
                  <span>{key.split("-")[1]}</span>:{" "}
                  {key === "certificate-URL" ? (
                    <a
                      href={certification[key]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {certification[key as "certificate-name"]}
                    </a>
                  ) : (
                    <span>{certification[key as "certificate-name"]}</span>
                  )}
                </li>
              </>
            ))}
        </div>
      </motion.div>
    </>
  );
};

const Achievements = () => {
  const [loading, setLoading] = useState(true);
  const headingLeftVariants = useMemo<Variants>(
    () => ({
      far: {
        x: window.innerWidth > 765 ? -300 : -50,
      },
      near: {
        x: 0,
      },
    }),
    []
  );

  const headingRightVariants = useMemo<Variants>(
    () => ({
      far: {
        x: window.innerWidth > 765 ? 300 : 50,
      },
      near: {
        x: 0,
      },
    }),
    []
  );

  const bigSplashVariants = useMemo<Variants>(
    () => ({
      far: {
        x: "98vw",
        y: "-98vh",
      },
      near: {
        x: "0vw",
        y: "0vh",
      },
    }),
    []
  );

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (document.readyState === "complete") handleLoading();

    window.addEventListener("load", handleLoading);

    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  if (loading) return <Loader isAnimating={true} />;

  return (
    <section className={css.achievements}>
      <motion.img
        variants={bigSplashVariants}
        initial="far"
        animate="near"
        className={css.bg}
        src={bigSplash}
        transition={{ mass: 0 }}
        alt="Splash"
      />
      <div className={css["achievements-container"]} id="achievements">
        <h2 className={css["heading"]}>
          <motion.span
            variants={headingLeftVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.text}
          >
            Here are some of my latest achievements
          </motion.span>{" "}
          <motion.span
            variants={headingRightVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.line}
          ></motion.span>
        </h2>
        <div className={css["projects"]}>
          {achievements.map((achievement, i) => (
            <Achievement achievement={achievement} index={i} key={i} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={css["projects-container"]} id="projects">
        <h2 className={css["heading"]}>
          <motion.span
            variants={headingLeftVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.line}
          ></motion.span>
          <motion.span
            variants={headingRightVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.text}
          >
            Other noteworthy projects
          </motion.span>{" "}
        </h2>
        <div className={css.projects}>
          {otherProjects.map((project, i) => (
            <Project project={project} index={i} key={i} />
          ))}
        </div>
      </div>
      <div className={css["certifications-container"]} id="certifications">
        <h2 className={css["heading"]}>
          <motion.span
            variants={headingLeftVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.text}
          >
            My certifications
          </motion.span>{" "}
          <motion.span
            variants={headingRightVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.line}
          ></motion.span>
        </h2>
        <div className={css["certifications"]}>
          {certifications.map((certificate, i) => (
            <>
              <Certification certification={certificate} index={i} key={i} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
