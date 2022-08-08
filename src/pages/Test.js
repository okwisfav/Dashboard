import React from 'react';
import bgImage from "../video/background-img.mp4";
import logo from "../img/logouneleap.svg";
import { Link } from "react-router-dom";
const Test = () => {
    return (
        <div className="Hero">
        <header>
          <h2 class="logo">
            <img src={logo} alt="" />
          </h2>
        </header>
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="text">
          <h3>Find your perfect college, life balance.</h3>
          <p>
            Uneleap platform is designed to be perfect student companion tool.
            <br /> On and Off campus.
          </p>
  
          <div class="wrapper">
            <nav class="main-nav">
              <ul>
                  <p>
                    <Link className="links" to="">Unleap</Link>
                  </p>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default Test