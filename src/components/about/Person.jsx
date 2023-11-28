import React, { useState } from "react";
import jovenSource from "../images/me2.jpg";

const Person = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={`about__person ${isHovered ? "hovered" : ""}`}>
        <h1>Joven Aleman&#129413;</h1>
        <h3 className="about__subtitle">English Tutor</h3>

        <div className="about__pic">
          <img
            className="trigger"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            src={jovenSource}
            alt="jovenaleman"
          />
        </div>

        <div className={`about__info ${isHovered ? "hovered__person" : ""}`}>
          <div className="about__box">
            <i class="bx bx-cross bx-flashing bx-rotate-180"></i>
            <h3 className="about__title">ENGLISH LEVEL</h3>
            <span className="about__subtitle">C1</span>
          </div>

          <div className="about__box">
            <i class="bx bx-support"></i>

            <h3 className="about__title">SUPPORT</h3>
            <span className="about__subtitle">24/7</span>
          </div>

          <div className="about__box">
            <i class="bx bx-cool"></i>

            <h3 className="about__title">ATTITUDE</h3>
            <span className="about__subtitle">Bacan</span>
          </div>
        </div>
      </div>

      <p className={`about__description ${isHovered ? "hovered" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.
        Eos error placeat laboriosam nobis eum eveniet nemo, dicta nostrum.
        Facere ex veniam corrupti, repellat dignissimos molestiae dolorem
        officiis cum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa porro, labore a quod sequi doloribus dolorum quisquam iusto
        incidunt quis similique exercitationem quas eius, adipisci, sapiente
        minus rem voluptatum illum?
      </p>
    </>
  );
};

export default Person;
