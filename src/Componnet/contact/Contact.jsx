import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <div className="footer__container">
       <div className="footer__hero">
           <h1>The easiest way to contact us </h1>
           <p>Lorem ipsum dipisicing elit. Tenetur ipsam dolore  nihil provident   alias! Quia, dolore. <br /> Libero iusto similique harum aliquid tempora?</p>
       </div>
       <div class="containers">
        <div class="wrappers">
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

    </div>
  )
}

export default Contact
