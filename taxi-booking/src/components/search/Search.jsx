import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div>
      <div className="main-nav">
        <img
          className="logo"
          src="https://templatekit.jegtheme.com/taxico/wp-content/uploads/sites/190/2021/10/logo2-9NBZ6P-e1635074676704.png"
          alt=""
        />

        <input id="check" type="checkbox" />
        <label htmlFor="check">
          <i class="fa-solid fa-bars"></i>
        </label>

        <div className="nav-box">
          <div className="logo-in">
            <img
              className="img-in"
              src="https://templatekit.jegtheme.com/taxico/wp-content/uploads/sites/190/2021/10/logo2-9NBZ6P-e1635074676704.png"
              alt=""
            />
            <label htmlFor="check">
              <i class="fa-solid fa-xmark"></i>
            </label>
          </div>

          <div className="nav-btn">
            <p>Home</p>
            <p>About</p>
            <p>service</p>
            <p>Feautures</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className="btn">
            <button>Let's Ride Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
