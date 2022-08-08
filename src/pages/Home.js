import React from "react";
import hero from "../video/hero.mp4";
import logo from "../img/logouneleap.svg";
// import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="Hero">
      <header>
        <h2 class="logo">
          <img src={logo} alt="" />
        </h2>
      </header>
      <video loop
          muted
          autoPlay
          playsinline >
        <source src={hero} type="video/mp4" />
      </video>
      <div class="overlay"></div>
      <div class="text">
        <div class="wrapper">
          <nav class="main-nav">
            <ul>
                <p>
                <a class="links" href="https://home.uneleap.com/">Uneleap</a>
                </p>

                 <p>
                 <a class="links color-one" href="https://buddysafe.app/">Buddysafe</a>
                </p>

                <p>
                 <a class="links color-two" href="https://uneleap.com/">Borderless</a>
                </p>
                
                <p>
                <a class="links color-four" href="https://uneleap.com/"> AFEX</a>
                </p>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
