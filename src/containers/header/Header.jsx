import React from 'react'
import hero from '../../assets/hero.png';
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";

import './header.css';
const Header = () => {
  return (
   
      <section className="bubby__home">
            <div className="bubby__content">
                <h3>A Simple act of Kindness.</h3>
                <p>Download the BuddySafe App and Join our community in the fight save a precious life today..</p>
                <a href="http://onelink.to/buddysafe" class="btn">download now</a>
            </div>

            <div className="image">
                <img className="hero-img" src={hero} alt="hero" />
            </div>

             {/* <div className="social">
                 <a href="https://www.facebook.com/BuddySafeApp"> <p>Facebook</p> </a>
                 <a href="https://www.instagram.com/buddysafeapp/"> <p>Instagram</p> </a>
                 <a href="https://twitter.com/buddysafe"> <p>Twitter</p> </a>
             </div> */}
      </section>
  ) 
}

export default Header
