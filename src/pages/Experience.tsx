import React, { FC, useMemo, useState } from "react";
import css from "../styles/Experience.module.scss";
import gopack from "../assets/images/gopack_logo_new.png";
import momas from "../assets/images/momas-logo-2.png";
import upwork from "../assets/images/upwork-logo.png";
import eduBg from "../assets/images/education-bg.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AccordionClass, WorkClass, WorkDurationClass } from "../utils";
import { Variants, motion } from "framer-motion";

const workExperience: WorkClass[] = [
  new WorkClass(
    "GOPack",
    "https://gopack.vercel.app/",
    "Software developer (founder)",
    {
      start: new WorkDurationClass("Mar", "2023"),
      end: undefined,
    },
    {
      list: [
        `Founded a product called GOPack which helps developers bundle their projects into static files using pre-written webpack configuration in order to reduce plagiarism and suite production ready environments.`,
        `Utilized technologies like Webpack, Node Js and Babel in the application development process. The product also supports multiple javascript libraries like Typescript, Vue.Js, React.Js, jQuery, Angular.Js, etc`,
      ],
    },
    gopack
  ),
  new WorkClass(
    "Momas LTD Ngeria",
    "https://memmcol.com/",
    "Full stack developer",
    {
      start: new WorkDurationClass("July", "2022"),
      end: new WorkDurationClass("July", "2023"),
    },
    {
      list: [
        `Increased current organization’s customer turnout by 15% by
    developing a payment web application where their customers can pay
    for Energy/power using technologies like Paystack, Remita, React Js`,
        `Improved database performance by optimizing Microsoft SQL queries,
        fixing application bugs and boosting query response times by 11%.
        `,
        `Developed a real-time tracking software for current organization which
        tracks registered personnel around the world in real-time via the
        application installed on their device using technologies like MQTT,
        React Js, Node Js, Google maps etc which brought roughly 10%
        revenue to the organization.
        `,
      ],
    },
    momas
  ),
  new WorkClass(
    "Upwork",
    "https://www.upwork.com/freelancers/~01e414823e14f1cdde",
    "Software developer (freelancer)",
    {
      start: new WorkDurationClass("Oct", "2021"),
      end: undefined,
    },
    {
      description: `Worked as a freelancer at Upwork, developed web applications and software for potential clients
  `,
      list: [
        `Developed an auction application for a client on Fiverr. Users can signup, bid for products, post/update/delete products, etc. The application involves REST API integration, JWT authentication, email verification, microservices, Docker, etc.  `,
      ],
    },
    upwork
  ),
];
const educationList: AccordionClass[] = [
  new AccordionClass(
    <span>St. Christopher's Junior Seminary</span>,
    (
      <>
        <span>Anambra, Nigeria</span>
        <span className={css.degree}>Junior High school certificate</span>{" "}
        <span>Sciences</span>{" "}
        <p className={css["education-date"]}>Sept 2015 - Sept 2018</p>
      </>
    )
  ),
  new AccordionClass(
    <span>Federal science and technical college Yaba</span>,
    (
      <>
        <span>Lagos, Nigeria</span>
        <span className={css.degree}>High school certificate</span>{" "}
        <span>Automobile engineering</span>{" "}
        <p className={css["education-date"]}>Sept 2018 - Sept 2021</p>
      </>
    )
  ),
  new AccordionClass(
    <span>Aitech computer school</span>,
    (
      <>
        <span>Lagos, Nigeria</span>
        <span className={css.degree}>Certificate of completion</span>{" "}
        <span>Software engineering</span>{" "}
        <p className={css["education-date"]}>Oct 2021 - Apr 2022</p>
      </>
    )
  ),
];

const Accordion: FC<AccordionClass & { index?: number }> = ({
  Heading,
  Content,
  index,
}) => {
  const [show, setShow] = useState(false);
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
    <motion.div
      variants={variants}
      initial="down"
      whileInView="up"
      viewport={{ once: true }}
      transition={{
        delay: (index || 0) * 0.1,
      }}
      className={`${css.accordion} ${show ? css.active : ""}`}
    >
      <div className={css["heading-container"]}>
        <div className={css.heading}>{Heading}</div>
        <i
          className={`${show ? "fa-solid fa-minus" : "fa-solid fa-plus"}`}
          onClick={() => setShow((prev) => !prev)}
        ></i>
      </div>
      <div className={css["content-container"]}>
        <div className={css.content}>{Content}</div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const workHeadingVariants = useMemo<Variants>(
    () => ({
      far: {
        x: -200,
      },
      near: { x: 0 },
    }),
    []
  );
  const workHeadingLineVariants = useMemo<Variants>(
    () => ({
      far: {
        x: 300,
      },
      near: { x: 0 },
    }),
    []
  );
  const workExperienceBgVariants = useMemo<Variants>(
    () => ({
      down: {
        backgroundPositionY: "50rem",
      },
      up: {
        backgroundPositionY: "5rem",
      },
    }),
    []
  );
  const educationHeadingVariants = useMemo<Variants>(
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
    <div className={css.experience}>
      {" "}
      <motion.div
        variants={workExperienceBgVariants}
        initial="down"
        animate="up"
        className={css["work-experience"]}
      >
        <div className={css.heading}>
          <motion.span
            variants={workHeadingVariants}
            initial="far"
            animate="near"
            transition={{ mass: 0, ease: "easeOut", duration: 0.5 }}
          >
            WORKED AT ALL THESE COMPANIES
          </motion.span>
          <div className={css["line-container"]}>
            <motion.span
              variants={workHeadingLineVariants}
              initial="far"
              animate="near"
              transition={{ mass: 0, ease: "easeOut", duration: 0.5 }}
            ></motion.span>
          </div>
        </div>
        <br />
        <br />
        <div className={css["timeline-container"]}>
          <VerticalTimeline>
            {workExperience.map((work, i) => (
              <>
                <VerticalTimelineElement
                  key={i}
                  className={`vertical-timeline-element--work ${css["work-element-container"]}`}
                  contentStyle={{
                    backdropFilter: "blur(3px)",
                    // color: "white",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(39, 160, 214, 0.4)",
                    backdropFilter: "blur(6px)",
                  }}
                  date={`${work.timeline.start.month} ${
                    work.timeline.start.year
                  } - ${
                    work.timeline.end
                      ? `${work.timeline.end.month} ${work.timeline.end.year}`
                      : `Till date`
                  } `}
                  dateClassName={css["work-date"]}
                  iconStyle={{
                    background: "white",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  icon={
                    <img
                      src={work.image}
                      style={{ width: "100%", objectFit: "contain" }}
                      alt="icon"
                    />
                  }
                  textClassName={css["work-element"]}
                >
                  <h3 className="vertical-timeline-element-title">
                    <a
                      className={css["work-title"]}
                      target="_blank"
                      rel="noreferrer"
                      href={work.link}
                    >
                      @{work.name}
                    </a>
                  </h3>
                  <h4
                    style={{ fontWeight: "normal" }}
                    className="vertical-timeline-element-subtitle"
                  >
                    {work.role}
                  </h4>
                  {typeof work.content === "string" ? (
                    <p>{work.content}</p>
                  ) : (
                    <>
                      <ul className={css["each-work-list"]}>
                        {work.content.description && (
                          <span>{work.content.description}</span>
                        )}
                        {work.content.list.map((eachAchievement, i) => (
                          <>
                            <li key={i}>{eachAchievement}</li>
                          </>
                        ))}
                      </ul>
                    </>
                  )}
                </VerticalTimelineElement>
              </>
            ))}
          </VerticalTimeline>
        </div>
        <br />
        <br />
        <br />
      </motion.div>
      <div className={css["education-container"]}>
        <div className={css.background}>
          <img src={eduBg} alt="" />
        </div>
        <div className={css.left}>
          <motion.h2
            variants={educationHeadingVariants}
            initial="small"
            whileInView="big"
            viewport={{ once: true }}
          >
            WHERE I <span>STUDIED</span>
          </motion.h2>
        </div>
        <div className={css.right}>
          {educationList.map((education, i) => (
            <Accordion
              key={i}
              Heading={education.Heading}
              Content={education.Content}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
