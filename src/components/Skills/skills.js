import React from "react";
import "./skills.css";

import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDesc">
        I am skilled and passionate Application Designer with experince in MERN
        Stack
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Server-Side Development </h2>
            <p>
              I am responsible for writing code that runs on the server side,
              handling user requests and interactions with the database. This
              code is often written in Node.js (JavaScript)
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Problem-Solving</h2>
            <p>
              Backend development involves a lot of problem-solving. I'll
              encounter bugs, errors, and unexpected behavior. My job is to
              identify the root cause, fix the code, and ensure the application
              functions as expected.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Collaboration</h2>
            <p>
              I collaborate with frontend developers to ensure seamless
              communication between the frontend and backend. I  also work
              with other backend developers, DevOps engineers, and designers to
              build a cohesive and functional web application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
