import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tv4jjs1",
        "template_34fj89t",
        form.current,
        "--5T7qHgHaV7twn1OHH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="projects">
        <h1 className="contactpageTitle">My Projects</h1>
        <p className="clientDesc">
          Backend developer with extensive experience in designing and
          implementing scalable and e cient server-side solutions. Proficient in
          multiple programming languages and frameworks.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clentImg" />
          <img src={Adobe} alt="Client" className="clentImg" />
          <img src={Microsoft} alt="Client" className="clentImg" />
          <img src={Facebook} alt="Client" className="clentImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="conatctDesc">
          {" "}
          please fill out the form below to discuss any work opportunity.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="Your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="Your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={FacebookIcon} alt="facebbok" className="link" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={TwitterIcon} alt="Youtube" className="link" />
            </a>
            <img src={YouTubeIcon} alt="Twiiter" className="link" />

            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
