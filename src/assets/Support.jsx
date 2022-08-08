import React, { useState } from 'react'
import FAQ  from '../faq/FAQ'
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";
import './support.css'
import avater1 from '../../assets/avatar1.jpg';

const Support = () => {
    const [faqs, setfaqs] = useState([
        {
            question: 'How many team members can I invite?',
            answer: 'None. We don\'t address hardware issues.',
            open: true
        },
        {
            question: 'How do I reset my password?',
            answer: 'You. The Viewer.',
            open: false
        },
        {
            question: 'Can I cancel my subscription?',
            answer: 'You. The Viewer.',
            open: false
        },
        {
            question: 'Do you provide additional support?',
            answer: 'You. The Viewer.',
            open: false
        }
    ]);
    
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index){
                faq.open = !faq.open
            } else{
              faq.open = false;
            }
            return faq;
        }))    
    }

    return (
        <div>  
          <form className="form-searchs" method="get" action="#">
          <input type="search" name="search" placeholder="Typing here......." />
          <button className="btn-search" type="submit">Search</button>
        </form>

          <div>
             <h5>Get start</h5>
             <h2>About Me</h2>
             <div className="container about__container">
                <div className="about_me">
                  <div className='about__me-image'>
                       <img src={avater1} alt="" />
                  </div>
                </div>
                <div className="about__content">
                      <div className="about__cards">
                          <article className="about__card">
                          <i className="fas fa-hiking"></i>
                              <h5>Safety</h5>
                              <small>3+ Years</small>
                          </article> 
                      </div>
                </div>
             </div>
          </div> 

        <div className="services">
        <h1>Our Support</h1>
        <div className="cen">
          <div className="service">
          <i class="fas fa-laptop-code"></i>
            <h2>Basics</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

      <div className="service">
      <i class="far fa-newspaper"></i>
        <h2>Daily News</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="service">
      <i class="fas fa-laptop-code"></i>
        <h2>Subscription</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="service">
      <i class="fas fa-users"></i>
        <h2>Your Profile</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="service">
      <i class="fas fa-book-open"></i>
        <h2>Connection</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="service">
      <i class="far fa-question-circle"></i>
        <h2>Your Questions</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>   

   <div className="faqs">
            {faqs.map((faq, i) => (
             <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div> 
  </div>
    )  

    
}

export default Support