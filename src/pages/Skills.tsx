import React, {
  useEffect,
  useMemo,
  useRef,
  Suspense,
  useCallback,
  useState,
} from "react";
import css from "../styles/Skills.module.scss";
import { EachSkillClass, EachStackClass } from "../utils";
import frontendImg from "../assets/images/frontend-dev.png";
import backendImg from "../assets/images/backend-dev.png";
import databaseImg from "../assets/images/database-dev.png";
import ecommerceImg from "../assets/images/ecommerce-dev.png";
import htmlLogo from "../assets/images/html-img-2.png";
import cssLogo from "../assets/images/css-logo.png";
import javascriptLogo from "../assets/images/javascript-logo.png";
import typescriptLogo from "../assets/images/typescript.png";
import webpackLogo from "../assets/images/webpack.png";
import mongoDBLogo from "../assets/images/mongo-db-logo.png";
import mssqlLogo from "../assets/images/mssql-logo.png";
import dotNetLogo from "../assets/images/dot-net-logo.png";
import gitHubLogo from "../assets/images/github.png";
import gitLogo from "../assets/images/git.png";
import firebaseLogo from "../assets/images/firebase.png";
import cSharpLogo from "../assets/images/c-sharp-logo.png";
import nodeJsLogo from "../assets/images/nodejs.png";
import nextJsLogo from "../assets/images/next-js-logo.png";
import reactJsLogo from "../assets/images/react-logo.png";
import dockerLogo from "../assets/images/docker.png";
import scssLogo from "../assets/images/sass.png";
import semanticUILogo from "../assets/images/semantic-ui-logo.png";
import bootstrapLogo from "../assets/images/bootstrap-logo.png";
import threeJsLogo from "../assets/images/threejs-logo.png";
import redisLogo from "../assets/images/redis-logo.png";
import VanillaTilt from "vanilla-tilt";
import { motion, Variants } from "framer-motion";
import Loader from "../components/Loader";
import { Stacktype } from "../types";

const stack: EachStackClass[] = [
  new EachStackClass(
    "Frontend development",
    frontendImg,
    "As a frontend developer, i love making cool 2D and 3D interfaces for websites using HTML, CSS, and JavaScript. With React Js and Three Js, I craft interactive and dynamic designs. Let's create something incredible!",
    {
      top: "-7rem",
      left: "50%",
      transform: "translateX(-50%) scale(0.8)",
    }
  ),
  new EachStackClass(
    "Backend development",
    backendImg,
    "I'm also a backend developer who knows all about Node Js, Next Js, and the .NET framework. I'm great at making fast serverside software and REST APIs for web applications, making me a valuable team member.",
    { top: "-3rem", left: "50%", transform: "translateX(-50%) scale(0.9)" }
  ),
  new EachStackClass(
    "Database development",
    databaseImg,
    "I optimize database and i'm experienced in managing SQL (like MicrosoftSQL) and NoSQL databases (like MongoDB, Redis, and Firebase). I ensure efficient data storage and retrieval for smooth application performance.",
    {
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%) scale(0.5)",
    }
  ),
  new EachStackClass(
    "Ecommerce development",
    ecommerceImg,
    "As full stack developer, i'm skilled in building awesome ecommerce apps. Using React Js, Next Js, Node Js, and Shopify API, I create user-friendly and efficient online stores.",
    {
      top: "-7rem",
      left: "50%",
      transform: "translateX(-50%) scale(0.9)",
    }
  ),
];

const skills: EachSkillClass[] = [
  new EachSkillClass("HTML 5", htmlLogo, "frontend"),
  new EachSkillClass("CSS 3", cssLogo, "frontend"),
  new EachSkillClass("Semantic UI", semanticUILogo, "frontend"),
  new EachSkillClass("Bootstrap", bootstrapLogo, "frontend"),
  new EachSkillClass("SCSS", scssLogo, "frontend"),
  new EachSkillClass("Javascript", javascriptLogo, "frontend"),
  new EachSkillClass("Typescript", typescriptLogo, "frontend"),
  new EachSkillClass("Webpack", webpackLogo, "frontend"),
  new EachSkillClass("Three Js", threeJsLogo, "frontend"),
  new EachSkillClass("React Js", reactJsLogo, "frontend"),
  new EachSkillClass("Next Js", nextJsLogo, "frontend"),
  new EachSkillClass("Node Js", nodeJsLogo, "backend"),
  new EachSkillClass("C#", cSharpLogo, "backend"),
  new EachSkillClass("ASP.NET", dotNetLogo, "backend"),
  new EachSkillClass("Microsoft SQL", mssqlLogo, "database"),
  new EachSkillClass("Mongo DB", mongoDBLogo, "database"),
  new EachSkillClass("Redis", redisLogo, "database"),
  new EachSkillClass("Firebase", firebaseLogo, "database"),
  new EachSkillClass("Git", gitLogo, "frontend"),
  new EachSkillClass("GitHub", gitHubLogo, "frontend"),
  new EachSkillClass("Docker", dockerLogo, "backend"),
];

const EachStack: React.FC<{ eachStack: EachStackClass; index: number }> = ({
  eachStack,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const variants = useMemo<Variants>(
    () => ({
      low: { opacity: 0, y: 100 },
      high: { opacity: 1, y: 0 },
    }),
    []
  );

  useEffect(() => {
    VanillaTilt.init(ref.current as HTMLDivElement, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 2.5,
    });
  }, []);
  return (
    <motion.div
      className={css["each-stack"]}
      variants={variants}
      initial="low"
      whileInView="high"
      transition={{ delay: index * 0.2 }}
      ref={ref}
    >
      <div className={css["img-container"]}>
        <img
          src={eachStack.image}
          alt={eachStack.name}
          style={eachStack?.style}
        />
      </div>
      <div className={css.content}>
        <p className={css["stack-name"]}>{eachStack.name}</p>
        <div className={css.description}>{eachStack.description}</div>
      </div>
    </motion.div>
  );
};

const SkillsComponent: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Stacktype | undefined>(
    undefined
  );
  const sortSkills = useCallback(() => {
    const results: {
      frontend: EachSkillClass[];
      backend: EachSkillClass[];
      database: EachSkillClass[];
    } = {
      frontend: [],
      backend: [],
      database: [],
    };

    for (const skill of skills) {
      if (skill.stack === "frontend") results.frontend.push(skill);
      else if (skill.stack === "backend") results.backend.push(skill);
      else if (skill.stack === "database") results.database.push(skill);
    }

    return results;
  }, []);
  const brainVariants = useMemo<Variants>(
    () => ({
      small: { scale: 0 },
      big: { scale: 1 },
    }),
    []
  );
  const skillsVariants = useMemo<Variants>(
    () => ({
      far: { x: -100 },
      near: { x: 0 },
    }),
    []
  );
  const sortedSkills = sortSkills();
  const getSelectedSection = (section: Stacktype) => {
    if (selectedSection === section) return true;
    return false;
  };

  return (
    <div className={css["skills-container"]}>
      <span className={css["skills-heading"]}>TECHNOLOGIES I USE</span>
      <div>
        <div className={css["skills"]}>
          {Object.keys(sortedSkills).map((key, i) => (
            <motion.ul
              onMouseOver={() => setSelectedSection(key as Stacktype)}
              onMouseOut={() => setSelectedSection(undefined)}
              variants={skillsVariants}
              initial="far"
              whileInView="near"
              transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <span className={css["skill-group-name"]}>{key}</span>
              <br />
              <br />
              <div>
                {sortedSkills[key as Stacktype].map((skill, i) => (
                  <li key={i}>
                    <img src={skill.image} alt={skill.name} />{" "}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </div>
            </motion.ul>
          ))}
        </div>
        <motion.div
          variants={brainVariants}
          initial="small"
          whileInView="big"
          transition={{
            duration: 0.2,
            type: "spring",
            mass: 0.6,
          }}
          className={css.brain}
        >
          <svg
            viewBox="0 0 1929 1625"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="brain" clip-path="url(#clip0_20_2)">
              <g id="FrontendGroup">
                <path
                  id="path5312"
                  d="M1222.18 1618.92C1164.86 1602.65 1160.63 1537.55 1127.12 1494.44C1100.78 1445.95 1054.31 1414.21 1035.63 1361.15C997.379 1309.41 936.326 1278.49 907.484 1218.73C874.2 1163.68 793.881 1240.67 740.607 1211.13C686.823 1217.81 639.208 1230.62 587.344 1211.25C567.085 1211.6 514.284 1185.13 492.036 1172.7C468.179 1160.47 449.238 1149.9 426.292 1133.17C378.937 1115.88 389.81 1047.92 367.925 1029.2C331.561 986.897 253.238 1019.89 207.77 979.313C151.103 948.816 79.3646 906.782 78.6349 834.25C50.3664 804.156 14.9935 780.207 17.0326 729.747C38.0776 671.842 -13.5757 618.452 12.5759 566.418C25.2606 528.546 37.5386 472.761 58.6083 437.811C89.2538 392.287 133.775 358.138 157.515 308.042C193.025 260.225 243.274 227.639 294.043 198.509C336.119 192.366 351.65 141.852 394.251 127.053C446.594 94.5168 508.182 85.6064 565.438 65.7065C614.824 64.1164 677.415 38.1209 732.285 30.38C814.436 38.8191 889.884 -8.73189 972.445 8.99051C1033.2 32.5968 1088.59 14.7874 1152.16 27.7777C1260.03 43.5266 1366.78 73.4332 1464.39 121.806C1513.58 152.732 1555.89 195.285 1590.24 241.205C1600.31 298.015 1698.27 292.187 1713.84 361.212C1721.8 434.031 1771.83 467.051 1816.17 519.837C1826.44 566.071 1882.25 600.775 1883 656.259C1892.55 695.691 1921.76 726.268 1913.45 769.359C1905.14 836.609 1935.37 901.967 1918.5 968.314C1906.86 1033.5 1854.99 1078.18 1821.53 1132.11C1797.55 1172.75 1731.1 1167.51 1700.08 1161.21C1692.86 1253.49 1635.5 1373.86 1541.13 1391.77C1453.94 1402.38 1354.67 1412.78 1263.54 1427.93C1257.09 1485.53 1305.79 1542.54 1303.87 1601.8C1288.56 1618.98 1247.02 1620.07 1222.18 1618.92Z"
                  stroke="black"
                  stroke-width="10"
                  fill={getSelectedSection("frontend") ? "#D78282" : "#AAAAAA"}
                  className={
                    getSelectedSection("frontend") ? css.active : undefined
                  }
                />
                <g id="path5152">
                  <path
                    d="M1754.93 765.546C1804.12 766.421 1862.19 840.654 1886.65 898.644Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1754.93 765.546C1804.12 766.421 1862.19 840.654 1886.65 898.644"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5156">
                  <path
                    d="M1703.65 612.706C1727.5 621.668 1760.32 672.575 1759 701.81C1757.67 731.044 1756.27 792.128 1757.6 807.605"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1703.65 612.706C1727.5 621.668 1760.32 672.575 1759 701.81C1757.67 731.044 1756.27 792.128 1757.6 807.605"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5176">
                  <path
                    d="M1803.92 585.919C1816.74 578.659 1822.89 551.975 1822.89 538.673Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1803.92 585.919C1816.74 578.659 1822.89 551.975 1822.89 538.673"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5178">
                  <path
                    d="M1725.67 471.34C1731.1 460.281 1734.61 436.037 1734.61 423.928Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1725.67 471.34C1731.1 460.281 1734.61 436.037 1734.61 423.928"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5180" filter="url(#filter0_f_20_2)">
                  <path
                    d="M1854.22 713.539C1863.27 694.795 1883 677.849 1883 656.259Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1854.22 713.539C1863.27 694.795 1883 677.849 1883 656.259"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5282">
                  <path
                    d="M1080.68 1310.4C1157.1 1317.41 1303.41 1312.99 1359.13 1346.53Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1080.68 1310.4C1157.1 1317.41 1303.41 1312.99 1359.13 1346.53"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5304">
                  <path
                    d="M1089.36 1311.13C1161.31 1353.8 1268.74 1366.66 1352.42 1348.58Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1089.36 1311.13C1161.31 1353.8 1268.74 1366.66 1352.42 1348.58"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5318">
                  <path
                    d="M1046.58 1386.11C1056.39 1356.24 1038.23 1332.62 1026.91 1311.59Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1046.58 1386.11C1056.39 1356.24 1038.23 1332.62 1026.91 1311.59"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5320">
                  <path
                    d="M1127.18 1387.58C1146.78 1426.3 1182.45 1474.82 1207.54 1505.49Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1127.18 1387.58C1146.78 1426.3 1182.45 1474.82 1207.54 1505.49"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <g
                id="BackendGroup"
                fill={getSelectedSection("backend") ? "#D78282" : "#AAAAAA"}
                className={
                  getSelectedSection("backend") ? css.active : undefined
                }
              >
                <g id="path5324">
                  <path
                    d="M1092.27 306.085C1052.7 414.13 1109.77 375.21 1194.42 382.344C1224.27 384.86 1250.1 446.02 1278.45 378.106C1288.36 354.369 1256.94 310.771 1167.99 259.489"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1092.27 306.085C1052.7 414.13 1109.77 375.21 1194.42 382.344C1224.27 384.86 1250.1 446.02 1278.45 378.106C1288.36 354.369 1256.94 310.771 1167.99 259.489"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5070">
                  <path
                    d="M343.619 1005.2C343.619 1005.2 342.281 938.344 365.023 913.582C387.765 888.821 475.491 741.775 575.822 745.49C676.153 749.204 704.999 756.156 768.682 711.079C796.061 691.699 831.128 683.316 865.91 682.078C900.691 680.84 903.118 637.776 996.724 649.223C1046.08 655.259 1028.88 666.332 1082.39 683.665"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M343.619 1005.2C343.619 1005.2 342.281 938.344 365.023 913.582C387.765 888.821 475.491 741.775 575.822 745.49C676.153 749.204 704.999 756.156 768.682 711.079C796.061 691.699 831.128 683.316 865.91 682.078C900.691 680.84 903.118 637.776 996.724 649.223C1046.08 655.259 1028.88 666.332 1082.39 683.665"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5072">
                  <path
                    d="M274.847 670.007C274.847 670.007 363.452 716.965 380.94 731.052C398.428 745.14 425.737 788.534 459.547 800.743"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M274.847 670.007C274.847 670.007 363.452 716.965 380.94 731.052C398.428 745.14 425.737 788.534 459.547 800.743"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5074">
                  <path
                    d="M373.561 893.238C373.561 893.238 285.479 895.868 254.711 869.868C223.943 843.869 197.832 814.119 204.521 794.31C211.21 774.5 231.276 733.643 225.925 710.12C220.574 686.596 196.494 612.312 196.494 612.312"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M373.561 893.238C373.561 893.238 285.479 895.868 254.711 869.868C223.943 843.869 197.832 814.119 204.521 794.31C211.21 774.5 231.276 733.643 225.925 710.12C220.574 686.596 196.494 612.312 196.494 612.312"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5076">
                  <path
                    d="M357.259 925.254C318.318 917.16 321.021 917.426 301.028 887.82Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M357.259 925.254C318.318 917.16 321.021 917.426 301.028 887.82"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5078">
                  <path
                    d="M235.296 852.469C190.649 886.7 197.562 881.804 157.168 898.416Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M235.296 852.469C190.649 886.7 197.562 881.804 157.168 898.416"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5080">
                  <path
                    d="M233.69 854.282C180.217 861.639 90.1063 807.891 101.942 710.593C105.61 680.44 119.864 661.415 133.452 631.392"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M233.69 854.282C180.217 861.639 90.1063 807.891 101.942 710.593C105.61 680.44 119.864 661.415 133.452 631.392"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5082">
                  <path
                    d="M186.202 456.832C186.202 456.832 94.8446 477.178 66.3482 513.31C55.5888 526.952 18.0997 583.752 58.7551 634.347C45.6746 655.324 31.9027 662.26 31.9027 662.26"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M186.202 456.832C186.202 456.832 94.8446 477.178 66.3482 513.31C55.5888 526.952 18.0997 583.752 58.7551 634.347C45.6746 655.324 31.9027 662.26 31.9027 662.26"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5084">
                  <path
                    d="M175.083 536.315C175.083 536.315 185.246 484.575 197.441 445.089C209.637 405.603 245.357 305.721 282.959 294.828C320.561 283.935 334.393 297.559 340.285 285.871C345.51 275.507 342.47 248.614 388.474 231.232C440.896 211.426 638.464 179.215 693.12 232.734"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M175.083 536.315C175.083 536.315 185.246 484.575 197.441 445.089C209.637 405.603 245.357 305.721 282.959 294.828C320.561 283.935 334.393 297.559 340.285 285.871C345.51 275.507 342.47 248.614 388.474 231.232C440.896 211.426 638.464 179.215 693.12 232.734"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5086">
                  <path
                    d="M337.989 203.434C337.989 203.434 363.308 163.943 428.955 137.816C515.618 103.324 579.116 139.695 645.676 61.6624"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M337.989 203.434C337.989 203.434 363.308 163.943 428.955 137.816C515.618 103.324 579.116 139.695 645.676 61.6624"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5088">
                  <path
                    d="M559.24 71.0076C542.712 85.4813 547.804 92.1385 556.565 111.864Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M559.24 71.0076C542.712 85.4813 547.804 92.1385 556.565 111.864"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5090">
                  <path
                    d="M605.533 499.892C583.139 410.188 434.164 429.492 412.76 459.206C391.356 488.92 378.121 527.825 356.432 551.824C327.44 583.904 251.62 590.87 251.62 590.87"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M605.533 499.892C583.139 410.188 434.164 429.492 412.76 459.206C391.356 488.92 378.121 527.825 356.432 551.824C327.44 583.904 251.62 590.87 251.62 590.87"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5092">
                  <path
                    d="M435.891 339.023C430.54 386.07 423.852 419.498 443.918 441.783Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M435.891 339.023C430.54 386.07 423.852 419.498 443.918 441.783"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5094">
                  <path
                    d="M609.629 594.945C604.278 500.068 601.992 387.018 607.466 360.279C620.529 296.465 659.742 266.561 720.304 207.241"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M609.629 594.945C604.278 500.068 601.992 387.018 607.466 360.279C620.529 296.465 659.742 266.561 720.304 207.241"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5096">
                  <path
                    d="M469.637 255.24C508.432 275.049 571.306 323.334 612.776 338.191Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M469.637 255.24C508.432 275.049 571.306 323.334 612.776 338.191"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5098">
                  <path
                    d="M674.185 216.911C674.185 216.911 673.342 177.952 700.793 142.478C728.244 107.003 761.795 90.037 761.795 90.037"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M674.185 216.911C674.185 216.911 673.342 177.952 700.793 142.478C728.244 107.003 761.795 90.037 761.795 90.037"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5100">
                  <path
                    d="M785.584 46.5148C736.063 55.9147 691.656 107.173 703.757 140.116Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M785.584 46.5148C736.063 55.9147 691.656 107.173 703.757 140.116"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5102">
                  <path
                    d="M946.611 191.881C981.066 219.517 989.598 201.226 1008.68 238.305Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M946.611 191.881C981.066 219.517 989.598 201.226 1008.68 238.305"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5104">
                  <path
                    d="M835.665 327.194C865.015 352.155 915.13 349.262 923.851 389.957Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M835.665 327.194C865.015 352.155 915.13 349.262 923.851 389.957"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5106">
                  <path
                    d="M885.763 574.862C920.425 597.796 928.776 623.135 928.776 650.93Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M885.763 574.862C920.425 597.796 928.776 623.135 928.776 650.93"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5108">
                  <path
                    d="M718.801 594.966C764.943 636.926 786.069 656.644 771.226 711.593Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M718.801 594.966C764.943 636.926 786.069 656.644 771.226 711.593"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5110">
                  <path
                    d="M1032.78 658.83C1032.78 658.83 1057.69 643.085 1079.09 615.847C1100.5 588.609 1129.06 518.664 1129.06 518.664"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1032.78 658.83C1032.78 658.83 1057.69 643.085 1079.09 615.847C1100.5 588.609 1129.06 518.664 1129.06 518.664"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5112">
                  <path
                    d="M464.077 486.718C464.077 486.718 499.47 542.341 503.671 567.445C507.871 592.55 517.004 645.902 527.085 672.718C537.167 699.534 550.909 749.791 550.909 749.791"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M464.077 486.718C464.077 486.718 499.47 542.341 503.671 567.445C507.871 592.55 517.004 645.902 527.085 672.718C537.167 699.534 550.909 749.791 550.909 749.791"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5114">
                  <path
                    d="M758.168 501.73C744.122 429.922 743.331 383.079 780.788 342.842C818.245 302.604 854.554 277.007 858.904 261.97C867.86 231.009 904.603 147.989 947.649 126.228"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M758.168 501.73C744.122 429.922 743.331 383.079 780.788 342.842C818.245 302.604 854.554 277.007 858.904 261.97C867.86 231.009 904.603 147.989 947.649 126.228"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5118">
                  <path
                    d="M1296.01 384.101C1339.03 364.544 1372.39 354.203 1423.9 370.114C1465.52 382.967 1497.61 479.824 1497.61 479.824"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1296.01 384.101C1339.03 364.544 1372.39 354.203 1423.9 370.114C1465.52 382.967 1497.61 479.824 1497.61 479.824"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5126">
                  <path
                    d="M1044.22 457.995C1060.47 438.194 1132.25 392.879 1172.77 410.413C1255.42 446.171 1237.61 502.719 1235.59 552.957"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1044.22 457.995C1060.47 438.194 1132.25 392.879 1172.77 410.413C1255.42 446.171 1237.61 502.719 1235.59 552.957"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5128">
                  <path
                    d="M466.525 1152.8C511.271 1160.72 555.341 1163.69 601.091 1137.93Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M466.525 1152.8C511.271 1160.72 555.341 1163.69 601.091 1137.93"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5130">
                  <path
                    d="M681.697 1183.46C646.697 1155.44 619.265 1145.81 575.753 1130.93C532.24 1116.05 511.43 1060.02 533.186 1017.12C554.942 974.221 558.726 960.214 558.726 960.214"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M681.697 1183.46C646.697 1155.44 619.265 1145.81 575.753 1130.93C532.24 1116.05 511.43 1060.02 533.186 1017.12C554.942 974.221 558.726 960.214 558.726 960.214"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5132">
                  <path
                    d="M711.439 740.736C726.823 770.45 732.019 794.094 719.31 812.665Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M711.439 740.736C726.823 770.45 732.019 794.094 719.31 812.665"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5134">
                  <path
                    d="M658.481 857.984C663.163 885.222 687.364 916.73 687.364 916.73Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M658.481 857.984C663.163 885.222 687.364 916.73 687.364 916.73"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5136">
                  <path
                    d="M647.763 935.6C680.364 970.457 687.452 1019.67 687.452 1019.67Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M647.763 935.6C680.364 970.457 687.452 1019.67 687.452 1019.67"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5138">
                  <path
                    d="M1149.58 867.496C1171.1 846.909 1223.65 801.064 1223.65 801.064Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1149.58 867.496C1171.1 846.909 1223.65 801.064 1223.65 801.064"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5140">
                  <path
                    d="M841.907 786.929C835.219 819.738 845.921 849.452 861.973 863.071Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M841.907 786.929C835.219 819.738 845.921 849.452 861.973 863.071"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5142">
                  <path
                    d="M1352.26 624.576C1368.98 648.1 1435.05 654.862 1435.05 654.862Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1352.26 624.576C1368.98 648.1 1435.05 654.862 1435.05 654.862"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5158">
                  <path
                    d="M1542.44 844.997C1580.28 864.257 1658.38 853.668 1709.63 823.3Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1542.44 844.997C1580.28 864.257 1658.38 853.668 1709.63 823.3"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5160">
                  <path
                    d="M1570.21 530.898C1659.35 580.433 1687.62 600.059 1685.23 635.077C1682.83 670.096 1634.91 697.235 1666.06 734.004"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1570.21 530.898C1659.35 580.433 1687.62 600.059 1685.23 635.077C1682.83 670.096 1634.91 697.235 1666.06 734.004"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5162">
                  <path
                    d="M1608.25 473.32C1627.47 485.816 1669.68 529.454 1684.97 562.072C1697.1 587.936 1684.48 602.468 1685.4 620.182"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1608.25 473.32C1627.47 485.816 1669.68 529.454 1684.97 562.072C1697.1 587.936 1684.48 602.468 1685.4 620.182"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5166">
                  <path
                    d="M235.296 852.469C190.649 886.7 119.029 817.638 78.6349 834.25Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M235.296 852.469C190.649 886.7 119.029 817.638 78.6349 834.25"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5168">
                  <path
                    d="M117.923 664.299C97.4957 662.199 80.1886 646.125 58.4253 635.722Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M117.923 664.299C97.4957 662.199 80.1886 646.125 58.4253 635.722"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5170">
                  <path
                    d="M1635.98 425.18C1636.77 440.492 1632.59 466.542 1642.57 473.924C1653.97 482.362 1666.08 505.756 1675.5 510.811"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1635.98 425.18C1636.77 440.492 1632.59 466.542 1642.57 473.924C1653.97 482.362 1666.08 505.756 1675.5 510.811"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5172">
                  <path
                    d="M1612.27 554.219C1609.26 535.34 1617.6 501.726 1609.63 485.781Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1612.27 554.219C1609.26 535.34 1617.6 501.726 1609.63 485.781"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5182">
                  <path
                    d="M319.865 439.914C321.943 477.775 350.852 494.74 377.831 516.323Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M319.865 439.914C321.943 477.775 350.852 494.74 377.831 516.323"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5184">
                  <path
                    d="M483.261 209.128C499.955 181.786 489.882 163.712 485.896 144.576Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M483.261 209.128C499.955 181.786 489.882 163.712 485.896 144.576"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5186">
                  <path
                    d="M136.787 413.324C195.408 367.288 241.719 310.934 261.939 236.793Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M136.787 413.324C195.408 367.288 241.719 310.934 261.939 236.793"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5188">
                  <path
                    d="M211.878 335.598C175.7 329.294 147.418 342.139 123.613 354.041Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M211.878 335.598C175.7 329.294 147.418 342.139 123.613 354.041"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5190">
                  <path
                    d="M910.096 509.493C910.096 460.727 916.706 412.125 929.545 368.68C937.528 341.666 954.507 333.771 967.219 311.944C979.881 290.203 988.256 254.504 1005.43 240.285C1076.77 181.229 1184.17 192.272 1288.19 278.95"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M910.096 509.493C910.096 460.727 916.706 412.125 929.545 368.68C937.528 341.666 954.507 333.771 967.219 311.944C979.881 290.203 988.256 254.504 1005.43 240.285C1076.77 181.229 1184.17 192.272 1288.19 278.95"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5192">
                  <path
                    d="M1033.54 221.572C1032.12 171.776 1070 123.494 1112.72 107.981C1155.88 92.3067 1187.39 121.565 1235.58 136.389C1277.52 149.291 1347.25 152.583 1375.37 172.455C1402.69 191.759 1389.27 227.379 1372.5 257.872"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1033.54 221.572C1032.12 171.776 1070 123.494 1112.72 107.981C1155.88 92.3067 1187.39 121.565 1235.58 136.389C1277.52 149.291 1347.25 152.583 1375.37 172.455C1402.69 191.759 1389.27 227.379 1372.5 257.872"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5194">
                  <path
                    d="M894.287 177.511C869.441 103.107 923.278 46.1867 1008.9 56.3105C1083.58 65.1403 1144.39 45.7436 1205.19 73.4366C1218.56 80.1197 1219.68 100.366 1219.68 119.545"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M894.287 177.511C869.441 103.107 923.278 46.1867 1008.9 56.3105C1083.58 65.1403 1144.39 45.7436 1205.19 73.4366C1218.56 80.1197 1219.68 100.366 1219.68 119.545"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5196">
                  <path
                    d="M883.748 111.641C880.184 68.9519 818.519 39.1791 786.261 29.9627Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M883.748 111.641C880.184 68.9519 818.519 39.1791 786.261 29.9627"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5198">
                  <path
                    d="M1207.83 122.18C1261.53 119.561 1313.37 130.084 1365.91 130.084Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1207.83 122.18C1261.53 119.561 1313.37 130.084 1365.91 130.084"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5200">
                  <path
                    d="M1248.67 246.015C1420.21 199.048 1458.01 355.725 1563.52 417.276Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1248.67 246.015C1420.21 199.048 1458.01 355.725 1563.52 417.276"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5202">
                  <path
                    d="M1504.24 367.215C1588.31 349.776 1656.42 386.408 1671.55 462.067Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1504.24 367.215C1588.31 349.776 1656.42 386.408 1671.55 462.067"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5204">
                  <path
                    d="M1651.79 343.502C1605.89 360.132 1578.55 335.443 1570.11 296.076Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1651.79 343.502C1605.89 360.132 1578.55 335.443 1570.11 296.076"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5206">
                  <path
                    d="M1707.44 463.748C1727.41 276.855 1493.36 318.114 1437.05 186.732Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1707.44 463.748C1727.41 276.855 1493.36 318.114 1437.05 186.732"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5208">
                  <path
                    d="M1556.94 286.854C1565.24 178.023 1332.93 58.75 1232.86 44.454Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1556.94 286.854C1565.24 178.023 1332.93 58.75 1232.86 44.454"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5210">
                  <path
                    d="M1001 53.6758C1021.96 41.098 1040.4 25.6814 1063.57 22.3722Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1001 53.6758C1021.96 41.098 1040.4 25.6814 1063.57 22.3722"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5212">
                  <path
                    d="M975.928 1137.53C961.127 1219.81 993.916 1226.98 1031.3 1264.36C1037.36 1270.42 1018.07 1303.83 1027.34 1313.1C1087.87 1373.63 1159.18 1407.06 1263.54 1427.93"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M975.928 1137.53C961.127 1219.81 993.916 1226.98 1031.3 1264.36C1037.36 1270.42 1018.07 1303.83 1027.34 1313.1C1087.87 1373.63 1159.18 1407.06 1263.54 1427.93"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5218">
                  <path
                    d="M730.931 1201.12C791.358 1247.45 853.574 1194.69 904.826 1180.05Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M730.931 1201.12C791.358 1247.45 853.574 1194.69 904.826 1180.05"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5220">
                  <path
                    d="M891.653 1155.02C833.972 1149.54 830.058 1212.37 779.674 1219.57Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M891.653 1155.02C833.972 1149.54 830.058 1212.37 779.674 1219.57"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5222">
                  <path
                    d="M1031.3 1264.36C1078.23 1269.56 1111.82 1243.21 1145.91 1227.47Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1031.3 1264.36C1078.23 1269.56 1111.82 1243.21 1145.91 1227.47"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5284">
                  <path
                    d="M1355.46 1279.35C1280.86 1302.57 1165.79 1294 1098.48 1294Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1355.46 1279.35C1280.86 1302.57 1165.79 1294 1098.48 1294"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5286">
                  <path
                    d="M974.256 1147.81C1005.46 1146.86 1080.54 1161.62 1110.34 1158.31Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M974.256 1147.81C1005.46 1146.86 1080.54 1161.62 1110.34 1158.31"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5288">
                  <path
                    d="M972.28 1161.31C1001.79 1179.5 1054.23 1188.69 1101.83 1179.35C1120.85 1175.62 1138.82 1165.96 1162.06 1159.86"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M972.28 1161.31C1001.79 1179.5 1054.23 1188.69 1101.83 1179.35C1120.85 1175.62 1138.82 1165.96 1162.06 1159.86"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5290">
                  <path
                    d="M1176.43 1173.25C1161.81 1191.85 1119.1 1208.9 1092.5 1213.33C1044.92 1221.24 1006.84 1204.69 974.335 1197.72"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1176.43 1173.25C1161.81 1191.85 1119.1 1208.9 1092.5 1213.33C1044.92 1221.24 1006.84 1204.69 974.335 1197.72"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5292">
                  <path
                    d="M972.179 1180.14C1011.11 1204.23 1070.18 1210.53 1117.25 1188.98C1128.13 1184 1150.95 1176.11 1165.01 1172.14"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M972.179 1180.14C1011.11 1204.23 1070.18 1210.53 1117.25 1188.98C1128.13 1184 1150.95 1176.11 1165.01 1172.14"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5294">
                  <path
                    d="M1197.21 1189.19C1146.67 1228.8 1034.27 1230.78 986.708 1225.12Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1197.21 1189.19C1146.67 1228.8 1034.27 1230.78 986.708 1225.12"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5300">
                  <path
                    d="M1182.58 1158.71C1254.35 1157.88 1335.38 1180.46 1367.2 1227.97Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1182.58 1158.71C1254.35 1157.88 1335.38 1180.46 1367.2 1227.97"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5302">
                  <path
                    d="M1171.6 1166.87C1225.31 1173.81 1316.68 1181.29 1338.38 1226.09Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1171.6 1166.87C1225.31 1173.81 1316.68 1181.29 1338.38 1226.09"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5306">
                  <path
                    d="M700.05 57.7373C703.494 74.2607 697.506 92.4325 708.501 103.466Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M700.05 57.7373C703.494 74.2607 697.506 92.4325 708.501 103.466"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5308">
                  <path
                    d="M688.872 99.6565C691.838 110.333 693.53 119.95 693.53 131.329Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M688.872 99.6565C691.838 110.333 693.53 119.95 693.53 131.329"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5310">
                  <path
                    d="M1536.85 630.958C1540.71 627.998 1553.42 622.933 1561.26 619.92Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1536.85 630.958C1540.71 627.998 1553.42 622.933 1561.26 619.92"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5314">
                  <path
                    d="M888.221 1154.16C904.122 1177.79 917.975 1190.07 907.783 1216.57Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M888.221 1154.16C904.122 1177.79 917.975 1190.07 907.783 1216.57"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5316">
                  <path
                    d="M980.443 1216.57C933.249 1211.6 919.552 1154.25 972.991 1150.43Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M980.443 1216.57C933.249 1211.6 919.552 1154.25 972.991 1150.43"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5322">
                  <path
                    d="M826.619 885.297C848.507 903.159 853.265 928.377 853.265 928.377Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M826.619 885.297C848.507 903.159 853.265 928.377 853.265 928.377"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <g
                id="DatabaseGroup"
                fill={getSelectedSection("database") ? "#D78282" : "#AAAAAA"}
                className={
                  getSelectedSection("database") ? css.active : undefined
                }
              >
                <path
                  id="Vector 3"
                  d="M1266.5 1130L1181 1172L1053.5 1141H998.5L968 1161L948 1187.5L998.5 1231L1034 1275V1323.5L1053.5 1334.5L1124 1396L1209.5 1416H1324H1436L1510.5 1396L1581 1334.5L1633.5 1260L1647 1211.5L1633.5 1172L1596.5 1161L1385.5 1130H1266.5Z"
                  fill={getSelectedSection("database") ? "#D78282" : "#AAAAAA"}
                  className={
                    getSelectedSection("database") ? css.active : undefined
                  }
                  stroke="black"
                />
                <g id="path5122">
                  <path
                    d="M1669.92 438.255C1698.01 466.731 1768.09 483.796 1776.12 522.176C1780.06 541.034 1791.39 559.143 1812.7 597.656C1834.76 637.529 1836.56 668.774 1842.68 683.889C1854.72 713.603 1877.62 771.079 1884.85 835.521C1890.37 884.664 1890.3 979.39 1863.55 1009.1C1836.79 1038.82 1801.35 1151.22 1801.35 1151.22"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1669.92 438.255C1698.01 466.731 1768.09 483.796 1776.12 522.176C1780.06 541.034 1791.39 559.143 1812.7 597.656C1834.76 637.529 1836.56 668.774 1842.68 683.889C1854.72 713.603 1877.62 771.079 1884.85 835.521C1890.37 884.664 1890.3 979.39 1863.55 1009.1C1836.79 1038.82 1801.35 1151.22 1801.35 1151.22"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5124">
                  <path
                    d="M1499.14 540.212C1508.22 566.547 1539.58 607.91 1536.85 630.958C1533.92 644.515 1521.83 666.28 1491.16 723.748C1471.52 760.553 1421.69 760.902 1415.97 778.369C1399.32 829.146 1383.83 873.543 1350.39 898.305C1316.95 923.066 1324.07 927.067 1285.28 951.828M1363.87 578.196C1315.71 771.694 1151.01 862.95 1087.12 865.904C1047.02 867.759 1049.74 838.348 1016.29 847.014C1003.28 850.386 976.372 859.835 954.423 862.229C919.95 865.987 888.152 861.904 868.536 862.66C836.43 863.898 801.296 902.21 773.133 912.079C748.152 920.833 701.448 907.494 676.968 920.555C631.133 945.01 597.671 956.017 586.706 958.57C536.165 970.338 481.4 936.177 481.4 936.177"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1499.14 540.212C1508.22 566.547 1539.58 607.91 1536.85 630.958C1533.92 644.515 1521.83 666.28 1491.16 723.748C1471.52 760.553 1421.69 760.902 1415.97 778.369C1399.32 829.146 1383.83 873.543 1350.39 898.305C1316.95 923.066 1324.07 927.067 1285.28 951.828M1363.87 578.196C1315.71 771.694 1151.01 862.95 1087.12 865.904C1047.02 867.759 1049.74 838.348 1016.29 847.014C1003.28 850.386 976.372 859.835 954.423 862.229C919.95 865.987 888.152 861.904 868.536 862.66C836.43 863.898 801.296 902.21 773.133 912.079C748.152 920.833 701.448 907.494 676.968 920.555C631.133 945.01 597.671 956.017 586.706 958.57C536.165 970.338 481.4 936.177 481.4 936.177"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5144">
                  <path
                    d="M688.241 1110.95C688.241 1110.95 752.069 1061.9 768.11 1061.41C786.178 1060.87 834.311 1067.84 856.314 1063.68C902.006 1055.05 915.711 1027.01 960.973 1016.29C975.638 1012.82 1032.54 1030.8 1082.97 1016.9C1107.7 1010.08 1160.8 1006.97 1187.22 1005.67C1211.78 1004.47 1296.33 1038.66 1329.68 1034.09C1361.73 1029.69 1406.54 991.084 1469.08 967.376"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M688.241 1110.95C688.241 1110.95 752.069 1061.9 768.11 1061.41C786.178 1060.87 834.311 1067.84 856.314 1063.68C902.006 1055.05 915.711 1027.01 960.973 1016.29C975.638 1012.82 1032.54 1030.8 1082.97 1016.9C1107.7 1010.08 1160.8 1006.97 1187.22 1005.67C1211.78 1004.47 1296.33 1038.66 1329.68 1034.09C1361.73 1029.69 1406.54 991.084 1469.08 967.376"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5146">
                  <path
                    d="M1416.3 992.789C1468.74 1045.12 1515.71 1072.03 1556.31 1112.22Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1416.3 992.789C1468.74 1045.12 1515.71 1072.03 1556.31 1112.22"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5148">
                  <path
                    d="M1838.48 1052.54C1821.59 1065.93 1806.02 1102.07 1781.98 1119.92C1753.04 1141.41 1723.08 1145.3 1700.08 1161.21"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1838.48 1052.54C1821.59 1065.93 1806.02 1102.07 1781.98 1119.92C1753.04 1141.41 1723.08 1145.3 1700.08 1161.21"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5150">
                  <path
                    d="M1561.34 1003.34C1567.01 939.43 1561.8 887.778 1540.04 842.255C1518.28 796.731 1462.88 748.581 1462.88 748.581"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1561.34 1003.34C1567.01 939.43 1561.8 887.778 1540.04 842.255C1518.28 796.731 1462.88 748.581 1462.88 748.581"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5154">
                  <path
                    d="M1798.93 909.583C1789.68 926.698 1778.75 959.357 1754.23 979.692C1727.33 1002 1686.75 1012.15 1677.91 1034.49C1669.26 1056.38 1715.33 1079.26 1720.46 1095.28"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1798.93 909.583C1789.68 926.698 1778.75 959.357 1754.23 979.692C1727.33 1002 1686.75 1012.15 1677.91 1034.49C1669.26 1056.38 1715.33 1079.26 1720.46 1095.28"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5164">
                  <path
                    d="M1657.36 843.684C1684.79 869.948 1694.18 937.611 1702.69 974.38Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1657.36 843.684C1684.79 869.948 1694.18 937.611 1702.69 974.38"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5174">
                  <path
                    d="M1759.21 976.233C1778.44 983.527 1794.89 1000.74 1805.78 1011.63Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1759.21 976.233C1778.44 983.527 1794.89 1000.74 1805.78 1011.63"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5214">
                  <path
                    d="M1147.23 1392.15C1380.35 1431.3 1532.52 1442.3 1626.76 1253.82C1638.32 1230.69 1635.84 1176.82 1625.96 1159.9"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1147.23 1392.15C1380.35 1431.3 1532.52 1442.3 1626.76 1253.82C1638.32 1230.69 1635.84 1176.82 1625.96 1159.9"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5216">
                  <path
                    d="M1700.08 1161.21C1544.77 1172.67 1349.33 1076.36 1189.38 1156.33C1148.75 1176.65 1003.11 1105.48 962.792 1145.79C946.894 1161.69 888.698 1145.9 865.305 1153.7C800.981 1175.14 739.378 1197.59 683.618 1219.04"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1700.08 1161.21C1544.77 1172.67 1349.33 1076.36 1189.38 1156.33C1148.75 1176.65 1003.11 1105.48 962.792 1145.79C946.894 1161.69 888.698 1145.9 865.305 1153.7C800.981 1175.14 739.378 1197.59 683.618 1219.04"
                    stroke="black"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5224">
                  <path
                    d="M1094.53 1255.14C1150.21 1265.01 1231.05 1276.45 1304.97 1279.96C1357.55 1282.45 1402.49 1276.08 1450.89 1272.92"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1094.53 1255.14C1150.21 1265.01 1231.05 1276.45 1304.97 1279.96C1357.55 1282.45 1402.49 1276.08 1450.89 1272.92"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5226">
                  <path
                    d="M1168.3 1247.23C1252.42 1267.17 1347.75 1257.68 1429.81 1261.07Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1168.3 1247.23C1252.42 1267.17 1347.75 1257.68 1429.81 1261.07"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5228">
                  <path
                    d="M1425.53 1236.36C1337.82 1258.95 1244.05 1242.36 1163.04 1226.16Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1425.53 1236.36C1337.82 1258.95 1244.05 1242.36 1163.04 1226.16"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5230">
                  <path
                    d="M1630.32 1175.85C1648.61 1183.62 1657.66 1195.48 1696.15 1191.15Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1630.32 1175.85C1648.61 1183.62 1657.66 1195.48 1696.15 1191.15"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5232">
                  <path
                    d="M1633.41 1205.39C1653.05 1212.15 1672.14 1212.47 1691.7 1211.74Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1633.41 1205.39C1653.05 1212.15 1672.14 1212.47 1691.7 1211.74"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5234">
                  <path
                    d="M1633.97 1230.11C1648.69 1231.48 1673.81 1231.01 1679.38 1251.04Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1633.97 1230.11C1648.69 1231.48 1673.81 1231.01 1679.38 1251.04"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5236">
                  <path
                    d="M1627.7 1257.56C1648.61 1259.6 1662.4 1266.49 1667.71 1278.07Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1627.7 1257.56C1648.61 1259.6 1662.4 1266.49 1667.71 1278.07"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5238">
                  <path
                    d="M1608.95 1285.98C1629.73 1292.95 1654.1 1290.51 1652.06 1306.34Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1608.95 1285.98C1629.73 1292.95 1654.1 1290.51 1652.06 1306.34"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5240">
                  <path
                    d="M1600.22 1302.27C1619.78 1310.67 1634.46 1315.25 1632.63 1333.32Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1600.22 1302.27C1619.78 1310.67 1634.46 1315.25 1632.63 1333.32"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5242">
                  <path
                    d="M1584.53 1322.76C1604 1330.37 1607.06 1343.2 1612.53 1358.16Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1584.53 1322.76C1604 1330.37 1607.06 1343.2 1612.53 1358.16"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5244">
                  <path
                    d="M1571.28 1337.67C1588.45 1346.46 1594.62 1357.51 1598.78 1368.41Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1571.28 1337.67C1588.45 1346.46 1594.62 1357.51 1598.78 1368.41"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5246">
                  <path
                    d="M1555.37 1350.71C1567.29 1362.64 1583 1369.18 1581.16 1380.05Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1555.37 1350.71C1567.29 1362.64 1583 1369.18 1581.16 1380.05"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5248">
                  <path
                    d="M1538.68 1365.22C1546.82 1377.52 1552.35 1383.17 1554.41 1389.37Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1538.68 1365.22C1546.82 1377.52 1552.35 1383.17 1554.41 1389.37"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5250">
                  <path
                    d="M1451.54 1252.5C1480.52 1283.48 1581 1274.99 1625.44 1254.48Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1451.54 1252.5C1480.52 1283.48 1581 1274.99 1625.44 1254.48"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5252">
                  <path
                    d="M1522.07 1144.19C1565.13 1156.11 1600.67 1224.93 1612.25 1259.68Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1522.07 1144.19C1565.13 1156.11 1600.67 1224.93 1612.25 1259.68"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5254">
                  <path
                    d="M1449.19 1132.58C1492.81 1159.88 1563.29 1224.49 1586.02 1266.69Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1449.19 1132.58C1492.81 1159.88 1563.29 1224.49 1586.02 1266.69"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5256">
                  <path
                    d="M1418.36 1128.5C1459.66 1156.87 1536.08 1230.7 1554.96 1271.6Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1418.36 1128.5C1459.66 1156.87 1536.08 1230.7 1554.96 1271.6"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5258">
                  <path
                    d="M1340.22 1123.5C1354.86 1130.46 1389.15 1135.08 1415.12 1152.66C1469.55 1189.5 1523.21 1249.77 1533.8 1272.77"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1340.22 1123.5C1354.86 1130.46 1389.15 1135.08 1415.12 1152.66C1469.55 1189.5 1523.21 1249.77 1533.8 1272.77"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5260">
                  <path
                    d="M1293.47 1126.15C1306.26 1135.9 1357.2 1142.54 1390.7 1162.89C1447.49 1197.39 1493.68 1250.29 1506.06 1272.02"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1293.47 1126.15C1306.26 1135.9 1357.2 1142.54 1390.7 1162.89C1447.49 1197.39 1493.68 1250.29 1506.06 1272.02"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5262">
                  <path
                    d="M1254.35 1132.92C1260.59 1135.89 1323.1 1142.23 1348.4 1155.93C1413.82 1191.38 1473.9 1253.63 1478.32 1267.12"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1254.35 1132.92C1260.59 1135.89 1323.1 1142.23 1348.4 1155.93C1413.82 1191.38 1473.9 1253.63 1478.32 1267.12"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5264">
                  <path
                    d="M1482.83 1395.81C1421.1 1394.83 1382.79 1402.22 1318.58 1400.76C1265.93 1399.57 1185.63 1386.13 1135.93 1388.65"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1482.83 1395.81C1421.1 1394.83 1382.79 1402.22 1318.58 1400.76C1265.93 1399.57 1185.63 1386.13 1135.93 1388.65"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5266">
                  <path
                    d="M1031.3 1264.36C1085.36 1378.87 1180.7 1379.59 1301.82 1379.59C1332.11 1379.59 1382.71 1381.79 1411.04 1372.34C1441.54 1362.18 1484.95 1373.07 1519.59 1378"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1031.3 1264.36C1085.36 1378.87 1180.7 1379.59 1301.82 1379.59C1332.11 1379.59 1382.71 1381.79 1411.04 1372.34C1441.54 1362.18 1484.95 1373.07 1519.59 1378"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5268">
                  <path
                    d="M1050.12 1264.81C1112.09 1400.02 1278.01 1358.77 1396.7 1341.81Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1050.12 1264.81C1112.09 1400.02 1278.01 1358.77 1396.7 1341.81"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5270">
                  <path
                    d="M1533.8 1272.77C1557.59 1285.1 1594.87 1284.36 1611.71 1281.41Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1533.8 1272.77C1557.59 1285.1 1594.87 1284.36 1611.71 1281.41"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5272">
                  <path
                    d="M1555.2 1293.89C1572.22 1300.16 1583.86 1300.14 1600.22 1302.27Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1555.2 1293.89C1572.22 1300.16 1583.86 1300.14 1600.22 1302.27"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5274">
                  <path
                    d="M1584.53 1322.76C1552.8 1327.62 1528.61 1314.44 1504.43 1306.28C1479.8 1297.96 1455.17 1294.55 1421.22 1287.9"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1584.53 1322.76C1552.8 1327.62 1528.61 1314.44 1504.43 1306.28C1479.8 1297.96 1455.17 1294.55 1421.22 1287.9"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5276">
                  <path
                    d="M1412.68 1297.61C1463.76 1324.81 1510.72 1333.42 1571.28 1337.67Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1412.68 1297.61C1463.76 1324.81 1510.72 1333.42 1571.28 1337.67"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5278">
                  <path
                    d="M1543.95 1361.17C1456.41 1350.95 1420.96 1309.71 1336.29 1297.61Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1543.95 1361.17C1456.41 1350.95 1420.96 1309.71 1336.29 1297.61"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5280">
                  <path
                    d="M1469.5 1370.36C1434.07 1355.71 1394.26 1341.87 1361.24 1326.93C1338.37 1316.59 1322.52 1302.97 1298.1 1299.48"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1469.5 1370.36C1434.07 1355.71 1394.26 1341.87 1361.24 1326.93C1338.37 1316.59 1322.52 1302.97 1298.1 1299.48"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5296">
                  <path
                    d="M1153.16 1211.21C1235.11 1210.94 1311.1 1228.59 1393.55 1228.59Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1153.16 1211.21C1235.11 1210.94 1311.1 1228.59 1393.55 1228.59"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g id="path5298">
                  <path
                    d="M1240.65 1136.48C1301.5 1149.28 1349.24 1189.38 1393.55 1228.59Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M1240.65 1136.48C1301.5 1149.28 1349.24 1189.38 1393.55 1228.59"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_20_2"
                x="1847.68"
                y="649.713"
                width="41.8686"
                height="70.3742"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.773176"
                  result="effect1_foregroundBlur_20_2"
                />
              </filter>
              <clipPath id="clip0_20_2">
                <rect width="1928.71" height="1624.24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [loading, setLoading] = useState(true);

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
    <Suspense fallback="Loading...">
      <section className={css.skills}>
        <span className={css.heading}>MY SKILLS</span>
        <div className={css["stack-container"]}>
          <span className={css["stack-heading"]}>MY TECH STACK</span>
          <div className={css["stack"]}>
            {stack.map((eachStack, i) => (
              <EachStack eachStack={eachStack} key={i} index={i} />
            ))}
          </div>
        </div>
        <SkillsComponent />
      </section>
    </Suspense>
  );
};

export default Skills;
