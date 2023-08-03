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
import { SelectedSkillType, Stacktype } from "../types";
import BrainSVG from "../components/BrainSVG";

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
  new EachSkillClass("SCSS", scssLogo, "frontend"),
  new EachSkillClass("Javascript", javascriptLogo, "frontend"),
  new EachSkillClass("Typescript", typescriptLogo, "frontend"),
  new EachSkillClass("Webpack", webpackLogo, "frontend"),
  new EachSkillClass("Three Js", threeJsLogo, "frontend"),
  new EachSkillClass("React Js", reactJsLogo, "frontend"),
  new EachSkillClass("Next Js", nextJsLogo, "frontend"),
  new EachSkillClass("Semantic UI", semanticUILogo, "frontend"),
  new EachSkillClass("Bootstrap", bootstrapLogo, "frontend"),
  new EachSkillClass("Node Js", nodeJsLogo, "backend"),
  new EachSkillClass("C#", cSharpLogo, "backend"),
  new EachSkillClass("ASP.NET", dotNetLogo, "backend"),
  new EachSkillClass("Docker", dockerLogo, "backend"),
  new EachSkillClass("Microsoft SQL", mssqlLogo, "database"),
  new EachSkillClass("Mongo DB", mongoDBLogo, "database"),
  new EachSkillClass("Redis", redisLogo, "database"),
  new EachSkillClass("Firebase", firebaseLogo, "database"),
  new EachSkillClass("Git", gitLogo, "frontend"),
  new EachSkillClass("GitHub", gitHubLogo, "frontend"),
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
      viewport={{ once: true }}
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
  const [selectedSkill, setSelectedSkill] =
    useState<SelectedSkillType>(undefined);
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
  console.log("SKILL", selectedSkill);
  return (
    <div className={css["skills-container"]}>
      <span className={css["skills-heading"]}>TECHNOLOGIES I USE</span>
      <div>
        <div className={css["skills"]}>
          {Object.keys(sortedSkills).map((key, i) => (
            <motion.ul
              variants={skillsVariants}
              initial="far"
              whileInView="near"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
              onMouseOver={() =>
                setSelectedSkill((prevSkill) => ({
                  stack: key as Stacktype,
                  skill: prevSkill?.skill,
                }))
              }
              onMouseOut={() => setSelectedSkill(undefined)}
              className={selectedSkill?.stack === key ? css.active : ""}
            >
              <span className={css["skill-group-name"]}>{key}</span>
              <br />
              <br />
              <div>
                {sortedSkills[key as Stacktype].map((skill, i) => (
                  <li
                    key={i}
                    onMouseOver={() =>
                      setSelectedSkill({
                        stack: key as Stacktype,
                        skill: skill.name as any,
                      })
                    }
                    onMouseOut={() => setSelectedSkill(undefined)}
                    className={
                      selectedSkill?.skill === skill.name ? css.active : ""
                    }
                  >
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
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            type: "spring",
            mass: 0.6,
          }}
          className={css.brain}
        >
          <BrainSVG
            selectedSkill={selectedSkill}
            // setSelectedSkill={setSelectedSkill}
          />
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