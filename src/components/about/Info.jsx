import React from 'react'


const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
      <i class='bx bx-cross bx-flashing bx-rotate-180' ></i>

        <h3 className="about__title">E-LEVEL</h3>
        <span className="about__subtitle">C1</span>

      </div>

      <div className="about__box">

      <i class='bx bx-support' ></i>

        <h3 className="about__title">SUPPORT</h3>
        <span className="about__subtitle">24/7</span>
      </div>

      <div className="about__box">

      <i class='bx bx-cool' ></i>

        <h3 className="about__title">ATTITUDE</h3>
        <span className="about__subtitle">Bacan</span>

      </div>

    </div>
  )
}

export default Info