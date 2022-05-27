import React, { useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { sendData } from "../../../until/fetch/post";

export function ContactForm() {
  const { register, handleSubmit } = useForm(),
    [statusLetterSent, setStatusLetterSent] = useState(false);
  const onSubmit = (data) => {
    sendData(data).then((response) => {
      if (response) {
        setStatusLetterSent(true);
      }
    });
  };

  return (
    <div
      className={statusLetterSent ? "container-form sent" : "container-form"}
    >
      <div className="container-letter">
        <div className="wrapper centered">
          <article className="letter ">
            <div className="side test">
              <h1>Contact me</h1>
            </div>
            <div className="side ">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your name"
                  />
                </p>
                <p>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Your email"
                  />
                </p>
                <p>
                  <textarea
                    {...register("message")}
                    placeholder="Your message"
                  ></textarea>
                </p>
                <input className="button-send" type="submit" value="Send" />
              </form>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
      </div>
      <div className="result-message centered-msg">
        <p>Thank you for your message, I'll contact you soon.</p>
      </div>
    </div>
  );
}
