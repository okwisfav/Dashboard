import React from 'react';
import bubbysafe from '../../assets/bubbysafe.png';
import splash from '../../assets/splash.png';
import './footer.css';
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";

const Footer = () => (
  <footer>
        <div className="buddysafe__footer-content">
            <ul class="bubby__footer-list">
                <Link className= "list-text" to ="/about">About</Link>
                <Link className= "list-text" to ="/services">Services</Link>
                <Link className= "list-text" to ="/press">Press</Link>
                <Link className= "list-text" to ="/support">Support</Link>
                {/* <Link className= "list-text" to ="/terms">Terms</Link>
                <Link className= "list-text" to ="/privacy">Privacy</Link> */}
                <Link className= "list-text" to ="/contact">Contact</Link>
            </ul>
              
            <div className="footer-icon">
             <div class="share">
                    <a href="https://www.facebook.com/BuddySafeApp" class="fab fa-facebook facebook"></a>
                    <a href="https://www.linkedin.com/company/buddysafe/" class="fab fa-linkedin-in"></a>
                    <a href="https://twitter.com/buddysafe" class="fab fa-twitter twitter"></a>
                    <a href="https://www.instagram.com/buddysafeapp/" class="fab fa-instagram instagram"></a>
                </div>
             </div>

            <h3 className="stay">Stay in touch</h3>
             <div className="buddysafe__footer-img">
                 <Link className= "list-text-img" to ="/"> 
                 <img className="splash" src={splash}  alt="" />
                 </Link>
             </div>
        </div>
        <div className="footer-bottom">
        <p>copyright &copy;2022 bubbysafe.</p>
        </div>
    </footer>
);

export default Footer;
