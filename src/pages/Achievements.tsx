import { FC, useMemo, useState, useEffect } from "react";
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
import onlineAuctionImg from "../assets/images/Online-Auction-V2.png";
import goCharityAuthImg from "../assets/images/GO-Charity-Authentication.png";
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
import scrumArticleImage from "../assets/images/Scrum-Method-1024x751-1.jpg";
import prometheusArticleImage from "../assets/images/prometheus-article.png";
import agileArticleImage from "../assets/images/Agile-Methodology-Illustration.png";
import serverlessArticleImage from "../assets/images/Serverless-Architecture-A-Detailed-Guide.png";
import azurePricingArticleImage from "../assets/images/azure-article.png";
import jiraArticleImage from "../assets/images/jira-bg.jpg";
import devOpsArticleImage from "../assets/images/devops_banner.jpeg";
import socio_africa_image from "../assets/images/socio-africa-auth.png";
import heart_bridge_image from "../assets/images/Heart-Bridge-sign up.png";
import {
  AchievementClass,
  ArticleClass,
  CertificationClass,
  ProjectClass,
} from "../utils";
import * as rdd from "react-device-detect";
import { Variants, motion } from "framer-motion";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/store";
import { useSearchParams } from "react-router-dom";

// trying to trigger redeploy

// * The array of achievements
const achievements: AchievementClass[] = [
  new AchievementClass(
    heart_bridge_image,
    "Heart Bridge",
    `I led a team of three to build Heart Bridge, a platform designed to connect orphanages with donors, ensuring secure, transparent, and accessible charity efforts. 

🔹User Authentication 🔐 powered by Appwrite Auth, enabling both registered and anonymous users to participate securely. 
🔹Payment Integration 💳 via PayStack, facilitating seamless donations with secure processing and bank account verification. 
🔹Real-Time Notifications 🛎️ using Appwrite Real-Time, keeping orphanages and donors instantly updated when donations are made or calls/visits are scheduled. 
🔹Nearby Orphanage Search 🗺️ using Google Maps API, allowing donors to search for orphanages near their location for greater trust and local engagement. 
🔹Implemented a distributed system using Google Cloud Managed Instance Groups with auto-scaling for high availability 📈. 
🔹Set up load balancing to efficiently route traffic between multiple instances, ensuring consistent performance ⚡. 
🔹Established an automated CI/CD pipeline to update images to Docker Hub and automatically provision infrastructure using Terraform 🔄. 
🔹Managed sensitive credentials such as Appwrite API keys, PayStack secrets, and Google Maps API keys securely using Infisical 🔒.
`,
    [
      "Google managed instance group",
      "Terraform",
      "Next JS",
      "Paystack",
      "Google Maps API",
      "TypeScript",
      "Appwrite",
      "Docker",
      "CI/CD - GitHub workflows",
    ],
    [
      "https://github.com/onukwilip/heart-bridge",
      "https://heartbridge.com.ng/",
    ],
    "hb"
  ),
  new AchievementClass(
    socio_africa_image,
    "Socio Africa",
    `Co-engineered Socio Africa, an African-led social media platform, as one of its founding software engineers which scaled to over 4,000+ active users within months. 

🛠️ Developed API endpoints and integrated MongoDB for seamless data storage. 
🖼️ Utilized Cloudinary for storing and managing images from user profiles, communities, and posts. 
🔒 Implemented secure user authentication with access and refresh tokens. 
✍️ Created algorithms for users to create, edit, comment, and react to posts. 
🚀 Optimized performance with a pagination algorithm for loading posts and communities efficiently. 
🌐 Enabled users to create and engage in topic-based communities, sharing posts within groups. 
⚡ Improved database operations with indexing, reducing query times and latency.`,
    [
      "Google Kubernetes Engine",
      "Terraform",
      "MERN",
      "TDD - Jest, Cypress",
      "Next Js",
      "TypeScript",
      "Node Js",
      "MongoDB",
      "Redux",
      "Cloudinary",
      "Docker",
      "CI/CD - GitHub workflows",
    ],
    ["#", "https://www.socio.africa/"],
    "socio"
  ),

  new AchievementClass(
    goCharityAuthImg,
    "GO.Charity",
    `I developed a charity crowd-funding platform for local orphanages, addressing their need for a reliable, dedicated space to showcase their projects and receive donations. The platform was architected using microservices, each deployed in its own Docker container, and managed on a Google Kubernetes Engine (GKE) Cluster. 

🐋Created a GKE Cluster: Deployed each microservice as a deployment in separate Pods, with horizontal pod scaling enabled for efficiency. 

📊Implemented Monitoring: Deployed Prometheus and Grafana within the cluster to monitor container performance and health. 

🤖CI/CD Pipeline: Implemented a CI/CD pipeline using GitHub workflows and actions to test and build the client and server apps respectively on pull requests to the main branch.  

🚀Terraform for IaC: Used Terraform to provision and manage resources on Google Cloud, making infrastructure management efficient and reproducible. 

📃Created pages, and endpoints to create a new user, sign in an existing user, and to verify a User's email address via sending a One-time password to his/her email address. 

🔐Implemented the use of short-lived access tokens and long-lived refresh tokens for the OTP endpoints and platform as a whole. 

👨🏾‍💻Leveraged the use of Next Js, TypeScript, MUI, and SCSS for the client app interface
Used Node Js, Express Js, Cloudinary, and MongoDB for the server app. 

🧪Implemented functional testing using Cypress on the client application, and Jest, and Supertest on the server platform.`,
    [
      "Google Kubernetes Engine",
      "Terraform",
      "MERN",
      "TDD - Jest, Cypress",
      "Next Js",
      "TypeScript",
      "Node Js",
      "MongoDB",
      "Redux",
      "Cloudinary",
      "Docker",
      "CI/CD - GitHub workflows",
    ],
    ["https://github.com/go-charity", "https://www.gocharity.com.ng/"],
    "gc"
  ),

  new AchievementClass(
    onlineAuctionImg,
    "Online Auction",
    `💻 Built an online auction platform using Next.js, allowing users to list items, place bids, and receive email alerts for expiring products and highest bids. 

🤖 Set up a CI/CD pipeline deploying the app container to Google Cloud Run. 

📱 Developed the web app as a Progressive Web App (PWA) with features like offline support, push notifications for outbids, and caching for faster load times. 

🛠️ Used React.js for the front end, Next.js for APIs, MongoDB Atlas, Redis for data management, Cloudinary for media, and Docker for cloud deployment.`,
    [
      `Next Js`,
      `Service workers`,
      "Typescript",
      `Progressive web app`,
      `Google Cloud Run`,
      `Docker`,
      "CI/CD (GitHub Actions)",
    ],
    [`https://github.com/onukwilip/onlineAuction`, `https://bit.ly/3Thf9PG`],
    "online_auction",
    // window.innerWidth < 410 ? css["online-auction-project"] : undefined
    css["online-auction-project"]
  ),
  new AchievementClass(
    freeCodeCampPRImg,
    "FreeCodeCamp",
    `Had the opportunity to contribute to the Freecodecamp project. 
    I collaborated with others on the platform in the creation of E2E tests using Microsoft Playwright. 
    Fixed merge conflicts by rebasing the feature branch to the main branch`,
    [`Playwright`, `React Js`, "JavaScript", "Git", "Open-source"],
    [
      `https://github.com/freeCodeCamp/freeCodeCamp/pull/52104`,
      `https://freecodecamp.org/`,
    ],
    "freecodecamp",
    css["gopack-project"]
  ),
  new AchievementClass(
    hacktoberfestBadgeImg,
    "Hacktoberfest 2023",
    `Leveled up in the ongoing Hacktoberfest programmme, by contributing to various open-source projects; the likes of Freecodecamp. I wrote E2E tests for the Freecodecamp's website utilizing JavaScript and Playwright library 📚 `,
    [`Playwright`, `React Js`, `Next js`, "JavaScript", "Git", "Open-source"],
    [
      `https://www.holopin.io/hacktoberfest2023/userbadge/cloovsl7f311290gl3vjg6iy89`,
      `https://www.holopin.io/hacktoberfest2023/userbadge/cloovsl7f311290gl3vjg6iy89`,
    ],
    "hacktoberfest",
    css["nigtrak-project"]
  ),
  new AchievementClass(
    gopackImg,
    "GOPack",
    `Utilized technologies like Webpack, Node Js and Babel to develop a JavaScript bundling software. The product supports multiple javascript libraries like Typescript, Vue.Js, React.Js, jQuery, Angular.Js, etc`,
    [`Webpack`, `Node Js`, `Babel Js`, "Typescript"],
    [`https://github.com/onukwilip/gopack`, `https://gopack.vercel.app/`],
    "gopack",
    css["gopack-project"]
  ),
  new AchievementClass(
    nigtrakImg,
    "NigTrak",
    `🗺️Developed a real-time tracking and inventory application meant to track registered personnel and their assigned gadgets wherever they are, via their device. 
Implemented Google Maps third-party APIs for displaying online devices on the map.

🗼Utilized MQTT communication protocol for real-time communication with each device. 

👨🏾‍💻Used React Js for the application interface development and Typescript for a better application development process and ensure a bug-free software`,
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
      `https://nigtrak.vercel.app/`,
    ],
    "nigtrak",
    // window.innerWidth < 308 ? css["nigtrak-project"] : undefined,
    css["nigtrak-project"]
  ),
];

// * The array of projects
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
    "",
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
    "",
    undefined,
    true
  ),
  new ProjectClass(
    mdHubImg,
    "Manassel Data Hub",
    "A website I designed for an organization so they could gain online visibility using technologies like React Js, SCSS and Three Js. With features like Email integration, customers who visit the website can easily contact the organization.",
    ["React Js", "Three Js", "GSAP", "SCSS", "Typescript"],
    ["https://github.com/onukwilip/md-hub", "https://md-hub.vercel.app/"],
    "",
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
    "",
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
    "",
    undefined
  ),
];

// * The array of certifications
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

// * The array of published articles
const articles: ArticleClass[] = [
  new ArticleClass(
    "Implementing the Agile model with Scrum 💻. A deep dive into the Scrum framework.",
    "In this article, I discussed various frameworks developed to implement the Agile model, such as Kanban, Scrum, Extreme programming, etc. Additionally, I explored the Scrum framework in detail, outlining the roles within Scrum, namely The Product Owner, the Scrum Master, and the development team. I also clarified other terms and concepts utilized in the Scrum framework, including Sprint, Sprint planning, Sprint retrospective, the product backlog, user stories, epics, etc. Lastly, I highlighted the benefits of incorporating Scrum frameworks in businesses and the product lifecycle.",
    scrumArticleImage,
    "https://medium.com/@onukwilip/implementing-the-agile-model-with-scrum-a-deep-dive-into-the-scrum-framework-859a3ad99763",
    ["medium", "scrum", "agile"]
  ),
  new ArticleClass(
    "Serverless for dummies 🤓! Everything you need to know about the Serverless architecture and deploying your application to Google Cloud’s serverless platform ☁️💻!",
    "In this article, I explained what Serverless architecture is all about, the differences between Serverless architecture and other architectures, how to create a Node JS web server, wrap it in a Docker container, and publish the image build to Docker Hub; I also displayed how to create a Google Cloud account, and project, and how to deploy an application to the Google Cloud Run service.",
    serverlessArticleImage,
    "https://medium.com/@onukwilip/serverless-for-dummies-60e37a07c82c",
    ["medium", "serverless", "devops", "google cloud run", "docker"]
  ),
  new ArticleClass(
    "What is Agile, and all you need to know about the Agile model",
    "In this article, I'll explain how the Agile model came about, its manifesto, core values, principles, and advantages.",
    agileArticleImage,
    "https://medium.com/@onukwilip/what-is-agile-and-all-you-need-to-know-about-the-agile-model-2c7986adec2e",
    ["medium", "agile", "project management"]
  ),
  new ArticleClass(
    "Integrating Prometheus into Node/Express Js app, using the prom-client library to monitor app metrics",
    "Wrote an article explaining Prometheus and how to track a Node/Express JS web application's metrics e.g. HTTP response latency, CPU utilization, etc, using the prom-client npm library.",
    prometheusArticleImage,
    "https://medium.com/@onukwilip/integrating-prometheus-into-node-express-js-app-using-the-prom-client-library-to-monitor-app-604641049556",
    ["medium", "prometheus", "node js", "application monitoring"]
  ),
  new ArticleClass(
    "All you need to know about Microsoft Azure pricing factors",
    "This article contains information about factors that affect resource pricing on Microsoft Azure. It's a good approach to consider other factors which might affect the cost of your resource on Azure even while calculating using the Pricing calculator, inorder to avoid excess billing on said resources.",
    azurePricingArticleImage,
    "https://medium.com/@onukwilip/all-you-need-to-know-about-microsoft-azure-pricing-1aeff97b71d7",
    ["medium", "azure cloud", "devops"]
  ),
  new ArticleClass(
    "Implementing the Scrum framework using Atlassian Jira 💻",
    "In this article, I went through what Scrum was and how Jira helps implement it, I created an account and a project on Jira, organized and prioritized the Product backlog, created User stories and Epics, planned and created our first Sprint, and analyzed the ongoing Sprint's Burndown chart.",
    jiraArticleImage,
    "https://medium.com/@onukwilip/implementing-the-scrum-framework-using-atlassian-jira-4c022bed7b56",
    ["medium", "scrum", "agile", "project management"]
  ),
  new ArticleClass(
    "A rundown on DevOps and its concepts 👨🏾‍💻☁️🔁",
    "In this article, I gave a brief but detailed overview of the concept of DevOps, its components, how it came about, how it advances the Agile software development model, and its benefits in the software development lifecycle.",
    devOpsArticleImage,
    "https://medium.com/@onukwilip/a-rundown-on-devops-and-its-concepts-%EF%B8%8F-1fbcc16b821b",
    ["devops", "cloud computing", "agile", "software engineering", "medium"]
  ),
];

/**
 * The Achievement component
 * @param props: The Achievement component props { achievement: The achievement object, index: The ndex of the object in the list }
 * @returns JSX Achievement component
 */
const Achievement: FC<{ achievement: AchievementClass; index: number }> = ({
  achievement,
  index,
}) => {
  const dispatch = useDispatch();
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
        <div className={css.content}>
          {" "}
          {achievement.description.length > 200 ? (
            <>
              {achievement.description.slice(0, 200)}...
              <br />
              <a
                href="#"
                onClick={() =>
                  dispatch(modalActions.show(<Modal data={achievement} />))
                }
              >
                See more
              </a>{" "}
            </>
          ) : (
            achievement.description
          )}
        </div>
        <ul className={css.skills}>
          {achievement.skills.slice(0, 6).map((skill, i) => (
            <li key={i}>
              <code>{skill}</code>
            </li>
          ))}
          {achievement.skills.length > 6 && (
            <>
              <li
                className={css.view_more}
                onClick={() =>
                  dispatch(modalActions.show(<Modal data={achievement} />))
                }
              >
                <code>View more</code>
              </li>
            </>
          )}
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

/**
 * The Project component
 * @param props: The Project component props { project: The project object, index: The ndex of the object in the list }
 * @returns JSX Project component
 */
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

/**
 * The Certification component
 * @param props: The Certification component props { certification: The certification object, index: The ndex of the object in the list }
 * @returns JSX Certification component
 */
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

/**
 * The Modal article component
 * @param props: The Modal article component props { article: The article object}
 * @returns JSX Modal article component
 */
const ModalArticle: FC<{ article: ArticleClass }> = ({ article }) => {
  const dispatch = useDispatch();
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
    <>
      <motion.div
        variants={variants}
        initial="small"
        whileInView="big"
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        exit="small"
        className={css.modal}
      >
        <div className={css.img_container}>
          <img src={article.image} alt="" />
          <div className={css.link_container}>
            <a
              href={article.URL}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            <a
              href="#"
              onClick={() => dispatch(modalActions.hide())}
              className={`${css.link} ${css.del}`}
            >
              <i className="fas fa-xmark"></i>
            </a>
          </div>
        </div>
        <div className={css.content}>{article.content}</div>
        <div className={css.tags_container}>
          {article.tags.map((tag) => (
            <>
              <span>#{tag}</span>
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
};

/**
 * The Modal component
 * @param props: The Modal component props { data: The object data to be displayed - similar to the Achievement class}
 * @returns JSX Modal component
 */
const Modal: FC<{ data: AchievementClass }> = ({ data }) => {
  const dispatch = useDispatch();
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
    <>
      <motion.div
        variants={variants}
        initial="small"
        whileInView="big"
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        exit="small"
        className={css.modal}
      >
        <div className={css.img_container}>
          <img src={data.image} alt="" />
          <div className={css.link_container}>
            <a
              href={data.links[0]}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              <i className="fa-brands fa-github-alt" />
            </a>
            <a
              href={data.links[1]}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            <a
              href="#"
              onClick={() => dispatch(modalActions.hide())}
              className={`${css.link} ${css.del}`}
            >
              <i className="fas fa-xmark"></i>
            </a>
          </div>
        </div>
        <div className={css.content}>
          {data.description.split(". ").map((each_desc, i) => (
            <>
              <li>{each_desc}</li>
            </>
          ))}
        </div>
        <div className={css.tags_container}>
          {data.skills.map((tag) => (
            <>
              <span>#{tag}</span>
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
};

/**
 * The Article component
 * @param props: The Article component props { article: The article object, index: The ndex of the object in the list }
 * @returns JSX Article component
 */
const Article: FC<{ article: ArticleClass; index: number }> = ({
  article,
  index,
}) => {
  const dispatch = useDispatch();
  const variants = useMemo<Variants>(
    () => ({
      down: {
        y: 100,
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
        transition={{ delay: index * 0.1, duration: 0.2 }}
        viewport={{ once: true }}
        className={css.article}
        key={index}
      >
        <div className={css.img_container}>
          <div className={css.demo_img}>
            <a
              href={article.URL}
              target="_blank"
              rel="noreferrer"
              className={css.mobile_link_container}
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            <img src={article.image} alt="article" />
          </div>
        </div>
        <div className={css.content_container}>
          <div className={css.content}>
            {article.content.length > 200 ? (
              <>
                {article.content.slice(0, 200)}...
                <a
                  href="#"
                  onClick={() =>
                    dispatch(
                      modalActions.show(<ModalArticle article={article} />)
                    )
                  }
                >
                  See more
                </a>{" "}
              </>
            ) : (
              article.content
            )}
          </div>
          <div className={css.tags_container}>
            {article.tags.map((tag) => (
              <>
                <span>#{tag}</span>
              </>
            ))}
          </div>
        </div>
        <a
          href={article.URL}
          target="_blank"
          rel="noreferrer"
          className={css.link_container}
        >
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </motion.div>
    </>
  );
};

/**
 * The Achievement page commponent
 * @returns JSX Achievements component
 */
const Achievements = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

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

  /**
   * Displays the achievement specified in the request URL when the pahge is loaded
   * @returns void
   */
  const displayAchievementOnLoad = () => {
    const id = searchParams.get("achievement");
    if (!id) return;

    const achievement_to_display = achievements.find(
      (achievement) => achievement.id === id
    );

    if (!achievement_to_display) return;

    dispatch(modalActions.show(<Modal data={achievement_to_display} />));
  };

  useEffect(() => {
    if (document.readyState === "complete") handleLoading();

    window.addEventListener("load", handleLoading);
    // console.log("Params", searchParams.get("project"));
    displayAchievementOnLoad();

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
      <div className={css.articles_container} id="articles">
        <h2 className={css["heading"]}>
          <motion.span
            variants={headingLeftVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.text}
          >
            My articles
          </motion.span>{" "}
          <motion.span
            variants={headingRightVariants}
            initial="far"
            whileInView="near"
            viewport={{ once: true }}
            className={css.line}
          ></motion.span>
        </h2>
        <div className={css.articles}>
          {articles.map((article, i) => (
            <>
              <Article article={article} index={i} />
            </>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
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
