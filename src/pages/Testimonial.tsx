import React, { useEffect, useMemo, useState } from "react";
import css from "../styles/Testimonial.module.scss";
import quotes from "../assets/images/quotes.svg";
import mrSegunImg from "../assets/images/mr-segun-img.jpg";
import sodiqImg from "../assets/images/sodiq-img.png";
import mrTundeImg from "../assets/images/mr-tunde-img.png";
import paintSplash2 from "../assets/images/paint-splash-2.svg";
import paintSplash from "../assets/images/paint-splash.svg";
import { TestimonialClass } from "../utils";
import { Variants, motion } from "framer-motion";
import Loader from "../components/Loader";

const testimonials: TestimonialClass[] = [
  new TestimonialClass(
    `Olusegun Adebumiti`,
    (
      <>
        Senior Software developer{" "}
        <a href="https://memmcol.com" target="_blank" rel="noreferrer">
          {" "}
          @ Momas LTD Nigeria
        </a>
      </>
    ),
    `Prince Onukwili is an exceptional software engineer and a valuable asset to any team. I had the pleasure of working closely with him in the Software Department at MEMMCOL, and I can confidently say that he is one of the most innovative, talented and dedicated professionals I've ever had the opportunity to collaborate with. Without reservations, I recommend Prince for any software engineering role. His passion for the field, combined with his exceptional skills and collaborative nature, makes him an invaluable team member.`,
    mrSegunImg
  ),
  new TestimonialClass(
    `Badmus Sodiq`,
    (
      <>
        Software developer{" "}
        <a href="https://memmcol.com" target="_blank" rel="noreferrer">
          {" "}
          @ Momas LTD Nigeria
        </a>
      </>
    ),
    `Prince is a smart and dedicated worker whose work ethic is top-notch. He has a vast knowledge of technology and he is good at what he does. His learning ability is on another level. He makes sure he gets the job done roll and working no what what it takes.`,
    sodiqImg
  ),
  new TestimonialClass(
    `Tunde Tiamiyu`,
    <>Founder @ Aitech (FlexAliance)</>,
    `I wanted to take a moment to express my admiration for your progress as a full stack developer. Your technical skills aside, I also want to commend you on your professionalism and work ethic. You consistently meet deadlines, communicate effectively with your colleagues, and always strive to improve upon your work. These qualities are rare and highly valued in the industry.`,
    mrTundeImg
  ),
];

const Testimonial: React.FC<{
  testimonial: TestimonialClass;
  index: number;
}> = ({ testimonial, index }) => {
  const variants = useMemo<Variants>(
    () => ({
      far: {
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
      },
      near: {
        x: 0,
        opacity: 1,
      },
    }),
    []
  );

  return (
    <>
      <motion.div
        variants={variants}
        initial="far"
        whileInView="near"
        viewport={{ once: true }}
        className={css.testimonial}
      >
        <div className={css["img-container"]}>
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className={css["content-container"]}>
          <div className={css.content}>{testimonial.review}</div>

          <div className={css.name}>
            <span>{testimonial.name}</span>
            <span>{testimonial.title}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Testimonials = () => {
  const [loading, setLoading] = useState(true);

  const headingVariants = useMemo<Variants>(
    () => ({
      up: {
        y: -500,
      },
      down: {
        y: 0,
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
    <section className={css.testimonials}>
      <img src={paintSplash} className={css.paintSplash1} alt="splash1" />
      <img src={paintSplash2} className={css.paintSplash2} alt="splash2" />
      <div className={css.overlay}></div>
      <motion.div
        variants={headingVariants}
        initial="up"
        animate="down"
        transition={{ mass: 0 }}
        className={css.heading}
      >
        <img src={quotes} alt="quotes" />
        <h1>Some good words from some smart folks</h1>
        <div className={css.badge}>
          Thank you guys! <i className="fa-solid fa-heart"></i>
        </div>
      </motion.div>
      <div className={css["testimonials-container"]}>
        {testimonials.map((testimonial, i) => (
          <Testimonial testimonial={testimonial} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
