import React from 'react'
import hero from '../../assets/hero.png';
import './header.css';
function Header() {
  return (
      <header>
           <div className="container">
                <div className="faithmeet__word">
                    <h1 className="faith-hero">WHERE THE FAITHFUL <br /> FIND LOVE</h1>
                    <p className= "faith__hero-text">old tight as we get our working robots 
                         together and produce the most astonishing
                         christian dating app.</p>
                    <div className="faithmeet__icon">
                         <div className="faithmeet__icon-list">
                              <a href="#" class="fab fa-facebook-f facebook"></a>
                              <a href="#" class="fab fa-twitter twitter"></a>
                              <a href="#" class="fab fa-linkedin-in linkedin"></a>
                              <a href="#" class="fab fa-instagram instagram"></a>
                         </div>
                    </div>
                     <div className="faithmeet__phone">
                          <div className="faithmeet__phone-list">
                              <p>Android</p>
                               <p>iOS</p>
                          </div>
                     </div>
                </div>
           </div>
      </header>
  )
}


export default Header;
