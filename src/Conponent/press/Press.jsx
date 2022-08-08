import React from 'react'
import Article from '../article/Article';
import './press.css';
import { blog1 } from './import'

const Press = () => {
  return (
     <div className="bubby__article-home">
            <div className="bubby__article section__padding">
            <div className="bubby__article-heading">
              <h1 className="gradient__text">Press</h1>
              <p> For media enquiries, please contact </p>
               <p>press@buddysafe.app</p>
               
            </div>
            {/* <div className='buddy__article-Media'> 
            <h2>Media Mentions</h2>
            </div> */}
        <div className="bubby__article-container">
          <div className="bubby__article-container_groupA">
            <Article imgUrl={blog1} date="Sep 26, 2021" text="bubbysafe is  the future. Let us exlore how it is?" />
          </div>
          <div className="bubby__article-container_groupB">
            <Article imgUrl={blog1} date="Sep 26, 2021" text="bubbysafe is  the future. Let us exlore how it is?" />
            <Article imgUrl={blog1} date="Sep 26, 2021" text="bubbysafe is  the future. Let us exlore how it is?" />
            <Article imgUrl={blog1} date="Sep 26, 2021" text="bubbysafe is  the future. Let us exlore how it is?" />
            <Article imgUrl={blog1} date="Sep 26, 2021" text="bubbysafe is  the future. Let us exlore how it is?" />
          </div>
        </div>
        </div>
      
        <div className="bubby__cta">
          <div className="bubby__cta-content">
            <p>Request Early Access to Get Started</p>
            <h3>Register Today to get access to the next press endless possibilities.</h3>
          </div>
          <div className="bubby__cta-btn">
            <button type="button">Download</button>
          </div>
      </div>
     </div>
  )
}

export default Press