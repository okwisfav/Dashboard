import React from 'react'
import './services.css'
import heroimg from '../../assets/home-img.svg';
import services from '../../assets/services.jpg';
const Services = () => {
  return (
    <div> 
       <div className="services">
           <h2>Our services</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Ullam, commodi perspiciatis architecto odio dolores iste?
              Obcaecati possimus in nihil! Commodi ea amet, soluta odio 
              in et officiis omnis libero ratione?</p>
       </div>
       <main className="services-us-section">
            <div className="services-text-container">
                <h3>Our Best Categories</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Pariatur, unde possimus. Rerum.elit. Pariatur, unde possimus. Rerum. </p>
                  <ul>
                      <li><a href="#">Meeting in Person</a></li>
                      <li><a href="#">Tell Friends and Family About Your Plans</a></li>
                      <li><a href="#">Don’t Be In A Rush</a></li>
                      <li><a href="#">Sexual Health & Consent</a></li>
                  </ul>
                <button>Read More</button>
            </div>
            <div className="services-img-container">
              <img src={services} alt="" />
            </div>  
    </main>

        <div className="services__hero">
        <h1> List Of Our Best Tools</h1>
         <div className="box-container">
            <div className="box">
              <div className="icon">
                <span className="fas fa-code"></span>
              </div>
              <h3 className="title">Face to Face</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Adipisci suscipit excepturi iusto dolore tempora natus <br/> deserunt,
                  expedita illo similique debitis!</p>
                  <a href="#">read more <i className="fas fa-angle-double-right"></i></a>
            </div>

            <div className="box">
              <div className="icon">
                <span className="fas fa-tools"></span>
              </div>
              <h3 className="title">Connect With People</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Adipisci suscipit excepturi iusto dolore tempora natus <br/> deserunt,
                  expedita illo similique debitis!</p>
                  <a href="#">read more <i className="fas fa-angle-double-right"></i></a>
            </div>

            <div className="box">
              <div className="icon">
                <span className="fas fa-paint-brush"></span>
              </div>
              <h3 className="title">Get Verified</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Adipisci suscipit excepturi iusto dolore tempora natus <br/> deserunt,
                  expedita illo similique debitis!</p>
                  <a href="#">read more <i className="fas fa-angle-double-right"></i></a>
            </div>

            <div className="box">
              <div className="icon">
                <span className="fas fa-bullhorn"></span>
              </div>
              <h3 className="title">Endless Possibilities</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Adipisci suscipit excepturi iusto dolore tempora natus <br/> deserunt,
                  expedita illo similique debitis!</p>
                  <a href="#">read more <i className="fas fa-angle-double-right"></i></a>
            </div>
        </div>
         </div>
    </div>
  )
}

export default Services
