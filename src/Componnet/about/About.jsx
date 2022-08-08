import React from 'react';
import './about.css';
import  Team from '../../Componnet/team/Team';
import { imgone,  imgtwo, imgthree, imgfour} from './import'
import aboutus from '../../assets/about_04.jpg';
const About = () => {
  return (
      <div>
           <header className='hero-section'>
          <div className="hero-text-container">
             <h1>Welcome to Faithmeet</h1>
             <h3>Faithmeet social media App</h3>
          </div>
          <div className="hero-btn-container">
             <button className="hero-btn-1">More To Know</button>
             <button className='hero-btn-2'>Learn More </button>
          </div>
       </header>
       <main className="about-us-section">
        <div className="about-text-container">
            <h3>Our Goals Are Standard</h3>
            <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed<br />
            tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum<br />
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br />
            mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam.<br />
            Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
                <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec<br/>
                ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
            <button>Read More</button>
        </div>
        <div className="about-img-container">
           <img src={aboutus} alt="" />
        </div>
    </main>
    <main className="about-us-section">
    <div className="about-img-container">
           <img src={aboutus} alt="" />
        </div>
        <div className="about-text-container">
            <h3>OUR VISION</h3>
            <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed<br />
            tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum<br />
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br />
            mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam.<br />
            Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
                <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec<br/>
                ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
            <button>Read More</button>
        </div>
    </main>

         <main className="out-team-section" id="team">
         <h3>Our Team</h3>
         <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.    </p>
            <div className="team-container">
               <Team Urlimg={imgone} name="FavourOfego" text="Production"></Team>
               <Team Urlimg={imgtwo} name="FavourOfego" text="Production"></Team>
               <Team Urlimg={imgthree} name="FavourOfego" text="Production"></Team>
               <Team Urlimg={imgone} name="FavourOfego" text="Production"></Team>
            </div>
         </main>
   </div>
  )
}

export default About
