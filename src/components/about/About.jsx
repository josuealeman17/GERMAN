import React, { useState } from "react";
import Person from "./Person";
import "./about.css";

const About = () => {

  return (
    <section className="about__section" id="about">
      <div className="about__container container grid">
        <div className="about__key">
          <span class="about__hand"> &#128477;</span>
        </div>

        <div className="about__data">

          <Person />

        </div>
      </div>
    </section>
  );
};

export default About;
