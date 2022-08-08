import React, { useState } from 'react'
import FAQ  from '../faq/FAQ'
import { BrowserRouter, Route, Routes,Links, Link } from "react-router-dom";
import './support.css'
// import avater1 from '../../assets/avatar1.jpg';
import support from '../../assets/support1.jpeg';

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
          {/* <input type="search" name="search" placeholder="Typing here......." />
          <button className="btn-search" type="submit">Search</button> */}
           </form> 

          <div className="list-btn">
                <div>
                <Link className= "list-text-img" to ="/change"> 
                   <p>Change Email</p>
                   </Link>
                </div>
                 <div>
                 <Link className= "list-text-img" to ="/setting"> 
                    <p>Account</p>
                    </Link>
                 </div>
                  <div>
                  <Link className= "list-text-img" to ="/delete"> 
                  <p>Reset Password</p>
                  </Link>
                  </div>
                   <div>
                   <Link className= "list-text-img" to ="/visibility">
                      <p>Profile Visibility</p>
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
               <Link className= "list-text-img" to ="/terms"> 
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
                {/*<a href="#"><button class="btn">learn more</button></a>*/}
            </div>

        </div>

        </section>

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