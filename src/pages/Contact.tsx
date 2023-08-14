import React, { useEffect, useMemo, useState } from "react";
import css from "../styles/Contact.module.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ServicesOptionClass, SocialLinks } from "../utils";
import { useInput, useForm } from "use-manage-form";
import emailjs from "@emailjs/browser";
import { Alert, AlertTitle } from "@mui/material";
import upwork from "../assets/images/upwork-icon-2.png";
import socialBlob from "../assets/images/social-blob.svg";
import Loader from "../components/Loader";
import { Variants, motion } from "framer-motion";

const socialIcons: SocialLinks[] = [
  new SocialLinks(
    "Linkedin",
    "fa-brands fa-linkedin-in",
    `https://www.linkedin.com/in/prince-onukwili-a82143233/`
  ),
  new SocialLinks(
    "GitHub",
    "fa-brands fa-github-alt",
    `https://github.com/onukwilip`
  ),
  new SocialLinks(
    "Twitter",
    "fa-brands fa-twitter",
    `https://twitter.com/POnukwili`
  ),
  new SocialLinks(
    "Upwork",
    (
      <>
        <img src={upwork} className={css["icon"]} alt={"Upwork"} />
      </>
    ),
    `https://www.upwork.com/freelancers/~01e414823e14f1cdde`
  ),
];

const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [errorSendingMail, setErrorSendingMail] = useState(false);
  const [successSendingMail, setSuccessSendingMail] = useState(false);
  const [loading, setLoading] = useState(true);

  const innerContainerVariants = useMemo<Variants>(
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

  const services: ServicesOptionClass[] = [
    new ServicesOptionClass("Web design", "1"),
    new ServicesOptionClass("Web application development", "2"),
    new ServicesOptionClass("Backend API development", "3"),
    new ServicesOptionClass("Database administration", "4"),
    new ServicesOptionClass("I am a job recruiter", "5"),
  ];
  const {
    value: name,
    isValid: nameIsValid,
    inputIsInValid: nameInputIsInValid,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useInput<string>((value) =>
    value ? true : false && value?.trim() !== ""
  );
  const {
    value: email,
    isValid: emailIsValid,
    inputIsInValid: emailInputIsInValid,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput<string>((value) =>
    value
      ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      : false
  );
  const {
    value: service,
    onChange: onServiceChange,
    reset: resetService,
  } = useInput<string>((value) =>
    value ? true : false && value?.trim() !== ""
  );
  const {
    value: description,
    isValid: descriptionIsValid,
    inputIsInValid: descriptionInputIsInValid,
    onChange: onDescriptionChange,
    onBlur: onDescriptionBlur,
    reset: resetDescription,
  } = useInput<string>((value) =>
    value ? true : false && value?.trim() !== ""
  );

  const { formIsValid, executeBlurHandlers, reset } = useForm({
    blurHandlers: [onNameBlur, onEmailBlur, onDescriptionBlur],
    resetHandlers: [resetName, resetEmail, resetDescription, resetService],
    validateOptions: () => nameIsValid && emailIsValid && descriptionIsValid,
  });

  const displayError = () => {
    setErrorSendingMail(true);

    setTimeout(() => setErrorSendingMail(false), 5000);
  };

  const displaySuccess = () => {
    setSuccessSendingMail(true);

    setTimeout(() => setSuccessSendingMail(false), 5000);
  };

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) return executeBlurHandlers();

    setSendingEmail(true);

    const response = await emailjs
      .send(
        "service_qmerz0h",
        "template_acejoz1",
        {
          from_name: name,
          from_email: email,
          service,
          message: description,
        },
        "0qab9OBvFLtvP0FeQ"
      )
      .catch((e) => {
        console.log(e);
      });

    if (response && response.status >= 200 && response.status <= 300) {
      displaySuccess();
      reset();
    } else displayError();

    setSendingEmail(false);
  };

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
    <section className={css.contact}>
      <motion.div
        variants={innerContainerVariants}
        initial="small"
        animate="big"
        className={css["inner-container"]}
      >
        <div className={css.left}>
          <h1>
            Let's collab! <br /> Send me the details of your project!
          </h1>
          <span>Let's create somethin' epic together 🚀!</span>
          <div className={css.socials}>
            {socialIcons.map((socialLink, i) => (
              <>
                <a
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css["social-link"]}
                  title={socialLink.name}
                >
                  <img src={socialBlob} className={css.blob} alt="" />

                  {typeof socialLink.icon === "string" ? (
                    <i className={socialLink.icon} />
                  ) : (
                    socialLink.icon
                  )}
                </a>
              </>
            ))}
          </div>
        </div>
        <div className={css.right}>
          <form onSubmit={submitHandler}>
            <span className={css.heading}>Send me a DM 🚀!</span>
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              name="Name"
              className={`${css.input} ${nameInputIsInValid ? css.error : ""}`}
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onNameChange(e.target.value)
              }
              onBlur={onNameBlur as any}
              variant="outlined"
              helperText={nameInputIsInValid && "Input cannot be empty"}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              name="Email"
              className={`${css.input} ${emailInputIsInValid ? css.error : ""}`}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onEmailChange(e.target.value)
              }
              onBlur={onEmailBlur as any}
              variant="outlined"
              helperText={emailInputIsInValid && "Input cannot be empty"}
            />
            <Autocomplete
              value={service}
              onChange={(_: any, newValue: string | null) => {
                onServiceChange((newValue as any).label);
              }}
              id="controllable-states-demo"
              options={services as any}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="What do you need help with?"
                  type="text"
                  name="service"
                />
              )}
              inputValue={service}
              onInputChange={(_: any, newValue: string | null) => {
                onServiceChange((newValue as any).label);
              }}
              className={css["select"]}
            />
            <TextField
              id="outlined-multiline-static"
              label="A brief descrition of the project"
              multiline
              rows={10}
              name="description"
              className={`${css.textarea} ${
                descriptionInputIsInValid ? css.error : ""
              }`}
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onDescriptionChange(e.target.value)
              }
              onBlur={onDescriptionBlur as any}
              variant="outlined"
              helperText={descriptionInputIsInValid && "Input cannot be empty"}
            />
            <Button
              className={css.button}
              disabled={sendingEmail}
              type="submit"
              variant="outlined"
            >
              {!sendingEmail ? "Send message" : "Sending..."}
            </Button>
            {errorSendingMail && (
              <Alert severity="error">
                <AlertTitle>Couldn't send email</AlertTitle>
                There was an error sending your email! Please check your
                internet connectivity and try again...
              </Alert>
            )}
            {successSendingMail && (
              <Alert severity="success">Mail sent successfully!</Alert>
            )}
          </form>
        </div>
      </motion.div>
      <iframe
        src={
          "https://maps.google.com/maps?q=" +
          "6.58711616881805" +
          "," +
          "3.25529775582557" +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
        width="600"
        height="450"
        style={{ border: 0 }}
        className={css.map}
        loading="lazy"
        {...{ referrerpolicy: "no-referrer-when-downgrade" }}
        title="map"
      ></iframe>
      <div className={css["overlay"]}></div>
    </section>
  );
};

export default Contact;
