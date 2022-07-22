import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";

const Contact = (props) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userMessage, setUserMessage] = useState();
  const [errors, setErrors] = useState();

  const schema = {
    userName: Joi.string().min(3).required().label("Name"),
    userEmail: Joi.string().email().required().label("Email"),
    userMessage: Joi.string().min(20).max(100).required().label("Message"),
  };

  const validate = () => {
    const result = Joi.validate({ userName, userEmail, userMessage }, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const template_params = {
    userName,
    userEmail,
    message: userMessage,
  };

  const onChangeUserName = (e) => {
    setUserName(e.currentTarget.value);
  };

  const onChangeUserEmail = (e) => {
    setUserEmail(e.currentTarget.value);
  };

  const onChangeMessage = (e) => {
    setUserMessage(e.currentTarget.value);
  };

  const onSubmit = () => {
    const err = validate();
    setErrors(err);
    if (!err) {
      try {
        axios.post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_39b823o",
          template_id: "contact_form",
          user_id: "user_KqKAmEXOSiTYiE7xO1sea",
          template_params,
        });
        props.history.push("/");
        toast.success(
          `Your email was send successfuly! I will be in touch with you shortly`
        );
      } catch (error) {
        toast.error(
          "Oups, unexpected error occured. Why don't you try to reach me via LinkedIn or Email."
        );
      }
    }
  };

  return (
    <React.Fragment>
      {/* Meta description */}

      <Helmet>
        <title>Iliyan Yordanov - Contact</title>
        <meta
          name="description"
          content="Contact form on the portfolio website of Iliyan Yordanov, front-end engeneer from Bristol, UK."
        />
        <meta property="image" content={IliyanYordanov} />
        <meta property="og:title" content="Iliyan Yordanov - Contact form" />
        <meta
          property="og:description"
          content="Contact form on the portfolio website of Iliyan Yordanov, front-end engeneer from Bristol, UK. "
        />
        <meta property="og:image" content={IliyanYordanov} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <h1>Contact form</h1>
      <form className="form-group col-12 col-lg-6 col-md-8 mx-auto text-left mt-4">
        <input
          className="form-control"
          onChange={onChangeUserName}
          required
          type="text"
          placeholder="Name"
          name="userName"
        />{" "}
        {errors && errors.userName ? (
          <div className="text-danger m-1">{errors.userName}</div>
        ) : (
          <br />
        )}
        <input
          className="form-control"
          onChange={onChangeUserEmail}
          required
          type="email"
          placeholder="Email"
          name="userEmail"
        />{" "}
        {errors && errors.userEmail ? (
          <div className="text-danger m-1">{errors.userEmail}</div>
        ) : (
          <br />
        )}
        <textarea
          className="form-control"
          onChange={onChangeMessage}
          required
          placeholder="Your message..."
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        {errors && errors.userMessage ? (
          <div className="text-danger m-1">{errors.userMessage}</div>
        ) : (
          <br />
        )}
        <button
          onClick={() => onSubmit()}
          className="btn btn-dark text-blue"
          type="button"
        >
          Send
        </button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
