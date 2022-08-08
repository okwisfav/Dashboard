import React from 'react'
import './footer.css'
import footerone from '../../assets/App Store.png';
import footertwo from '../../assets/Google Play.png';
import hero from '../../assets/hero.png';
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="faithmeet__footer">
        <div className="faithmeet__footer-hero">
              <div className="faithmeet__footer-text">
                  <div className="faithmeet__footer-list">
                    <div className="faithmeet-list">
                   
                       <ul>
                       <Link className= "list-text" to ="/about">About</Link>
                       <Link className= "list-text" to ="/services">Service</Link>
                       <Link className= "list-text" to ="/press">Press</Link>
                       <Link className= "list-text" to ="/support">Support</Link>
                       <Link className= "list-text" to ="/contact">Contact</Link>
                       </ul>
                      </div>

                        <div className="faithmeet__list-two">
                            <p>Download the app!</p>
                        </div>
                  </div>
              </div>
              <div className="faithmeeticons">
                    <div className="last__flex">
                    <Link className= "list-text" to ="/">
                        <img className="splash" src={hero}  alt="" />
                    </Link>
                    {/* <p className="faithmeet__lasttext">©Faith Meets Love.</p> */}
                        <div className="footer__img">
                        <Link className= "list-text" to ="/download">
                              <img src={footerone} alt="" />
                        </Link>
                          
                        <Link className= "list-text" to ="/download">
                        <img src={footertwo} alt="" />
                        </Link>
                          
                        </div>
                    </div>
                    <div className="footer-bottom">
                     <p>copyright &copy;2022 bubbysafe.</p>
                    </div>
              </div>            
        </div>
    </div>
  )
}
