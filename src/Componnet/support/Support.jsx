import React, { useState } from 'react'
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";
import './support.css'

import support from '../../assets/supportone.jpg';

const Support = () => {
    return (
        <div> 
          <div className="support-text">
              <h1>Hi. How can we help?</h1>
          </div>
          <div className="list-btn">
                <div>
                <Link className= "list-text-img" to ="/change"> 
                   <p>A Guide To Faithmeet</p>
                   </Link>
                </div>
                 <div>
                 <Link className= "list-text-img" to ="/setting"> 
                    <p>Troubleshooting</p>
                    </Link>
                 </div>
                  <div>
                  <Link className= "list-text-img" to ="/security"> 
                  <p>Security</p>
                  </Link>
                  </div>
                   <div>
                   <Link className= "list-text-img" to ="/Faq">
                      <p>Faq</p>
                      </Link>
                   </div>
                   <div>
                    <Link className= "list-text-img" to ="/subscription">
                    <p>Premium Subscription</p>
                    </Link>
                   
                   </div>

          </div>
         
             <section className="support" >
            <div className="row">

                  <div className="image">
                      <img src={support} alt="" />
                  </div>

            <div class="content">
                <h3>Support Pages for Our Users </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   In quod fugit eum adipisci dolores ipsum sunt repudiandae 
                   numquam sapiente iure.</p>
               <Link className= "list-text-img" to ="/safety"> 
                <p> <i className="fas fa-check-circle"></i>Safety Center </p>
                </Link>
                <Link className= "list-text-img" to ="/terms"> 
                <p> <i className="fas fa-check-circle"></i>Terms & Condition </p>
                </Link>
                <Link className= "list-text-img" to ="/cookie"> 
                <p> <i className="fas fa-check-circle"></i> Cookies </p>
                </Link>
                <Link className= "list-text-img" to ="/privacy"> 
                <p> <i className="fas fa-check-circle"></i> Privacy Policy </p>
                </Link>
                <Link className= "list-text-img" to ="/professional"> 
                <p> <i className="fas fa-check-circle"></i> Professional Guideline </p>
                </Link>
                <Link className= "list-text-img" to ="/eula"> 
                <p> <i className="fas fa-check-circle"></i> Eula </p>
                </Link>
                {/*<a href="#"><button class="btn">learn more</button></a>*/}
            </div>

        </div>

        </section>

  </div>
    )  

    
}

export default Support