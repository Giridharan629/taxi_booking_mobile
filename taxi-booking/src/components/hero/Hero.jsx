import React from "react";
import "./hero.css";
import mobile from "../../assets/mobile.png"

const Hero = () => {
  return (
    <div className="hero-container">
      <p className="slogan">Taxico most trusted taxi</p>
      <h1>Enjoy Your Confortable Trip</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, enim
        aut. Cum animi maiores impedit?
      </p>
      <div className="btns">
        
        <button className="hero-btn">Getting Started</button>
        <div className="play">
        <i class="fa-solid fa-play"></i>
        </div>
      </div>

      <div className="mobile">
        <img src={mobile} alt="" />
      </div>

    </div>
  );
};

export default Hero;
