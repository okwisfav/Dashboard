import React from 'react'
import './contact.css';
import contact from '../../assets/contact.svg';
const Contact = () => {
      return (
          <section className='bubby__footer_header-section'>
            <section className="bubby__footer-home">

              <div className="bubby__footer">
                  <h3>Contact Us</h3>
                  <p>We might be an app but we don't leave our customers hanging. Everything about us is on the app, but if you ever need help (or you just want to chat), we’ve got you.</p>
                  <a href="#" class="footer-contact">Email: tech@bubbysafe.app</a>
              </div>
              
              <div className="image">
                  <img src={contact} alt="hero" />
              </div>
           </section>

           <div class="container">
        <div class="wrapper">
            <header>Send us a Message</header>
            <form action="#">
              <div class="dbl-field">
                <div class="field">
                  <input type="text" name="name" placeholder="Enter your name" />
                  <i class='fas fa-user'></i>
                </div>
                <div class="field">
                  <input type="text" name="email" placeholder="Enter your email" />
                  <i class='fas fa-envelope'></i>
                </div>
              </div>
              <div class="dbl-field">
                <div class="field">
                  <input type="text" name="phone" placeholder="Enter your phone" />
                  <i class='fas fa-phone-alt'></i>
                </div>
                <div class="field">
                  <input type="text" name="website" placeholder="Enter your website" />
                  <i class='fas fa-globe'></i>
                </div>
              </div>
              <div class="message">
                <textarea placeholder="Write your message" name="message"></textarea>
                <i class="material-icons"></i>
              </div>
              <div class="button-area">
                <button type="submit">Send Message</button>
                <span></span>
              </div>
            </form>
          </div>
     </div>

      </section>
      )
}

export default Contact