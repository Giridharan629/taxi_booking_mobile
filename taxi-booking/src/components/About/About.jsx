import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <p className="title">About Taxico</p>
      <h2>
        Trusted Cab Services In All Over The World<span>.</span>
      </h2>
      <p className="dummy">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum socis natoque penatibus.
      </p>

        
      <div className="about-cards card1">
        <div className="logo">
          <i class="fa-regular fa-map"></i>
        </div>
        <div>
          <h5>Long Distance Trip</h5>
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit, sed doresop
            eiusmod tempor incididunt labore etect dolore.
          </p>
        </div>
      </div>

      <div className="about-cards card2">
        <div className="logo">
          <i class="fa-solid fa-taxi"></i>
        </div>
        <div>
          <h5>Taxi Tour Services</h5>
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit, sed doresop
            eiusmod tempor incididunt labore etect dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
