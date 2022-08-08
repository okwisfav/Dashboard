import React from 'react'
import Feature from '../feature/Feature';
import contact from '../../assets/contact.svg';
import footer  from  '../../containers/footer/Footer';
import './about.css';
const About = () => {
  return (
      <div className="bubby__about-us">
         <div className="bubby__about__header">
             <h1>We’re here because of you.</h1>
             <p>It is a long established fact that a reader will be distracted by
                the readable content <br /> of a page when looking at its layout.</p>
                <p p>So no matter who you are or where you live in Nigeria, we’re here because of you. We know <br /> the pain that comes with using a regular App and we will make things work better for everyone.</p>
                <p>Let’s do this together.</p>
         </div>

         <div className="bubby__about-section">
                <div className="bubby__about-section-image">
                  <img src={contact} alt="possibility" />
                </div>
                  <div className="bubby__about-section-content">
                    <h1 className="gradient__text">About BubbySafe</h1>
                    <p>To give everyone the power to better manage & protect themselves whenever needed.</p>
                    <h4>Download our App to Get Started</h4>
                    <a href="http://onelink.to/buddysafe" class="btn">download now</a>
                  </div>
          </div>
          
       <div className="bubby__about_section-color">
       <div className="bubby__about_section">
        <div className="bubby__about_section-feature">
          <Feature title="What is BubbySafe" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className="bubby__about_section-heading">
          <h1>A Simple act of Kindness.</h1>
          <p>Explore the Library</p>
        </div>
        <div className="bubby__about_section-container">
          <Feature title="security" text=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum" />
          <Feature title="security" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum As put impossible own apartments b" />
          <Feature title="security" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum" />
        </div>
      </div>
       </div>
      <footer />
    </div> 
   )
}

export default About;
