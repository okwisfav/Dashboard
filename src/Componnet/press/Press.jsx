import React from 'react'
import Article from '../article/Article';
import './press.css';
import { blog1, blog2, blog3, blog4} from './import'

const Press = () => {
  return (
     <div className="faithmeet__article-home">
            <div className="faithmeet__article section__padding">
            <div className="faithmeet__article-heading">
              <h1 className="gradient__text">LATEST NEWS</h1>
              <p> For media enquiries, please contact </p>
               <p>press@faithmeet.app</p>
               
            </div>
        <div className="faithmeet__article-container">
          <div className="faithmeet__article-container_groupB">
            <Article imgUrl={blog1} date="May 04, 2021" title="Garbo Launches Background Check Platform To Public and On Faithmeet" />
            <Article imgUrl={blog2} date="May 18, 2021" title="faithmeet is  the future. Let us exlore how it is?" />
            <Article imgUrl={blog2} date="Jun 09, 2021" title="faithmeet e is  the future. Let us exlore how it is?" />
            <Article imgUrl={blog2} date="Sep 26, 2021" title="faithmeet is  the future. Let us exlore how it is?" />
          </div>
        </div>
        <div className="btn-Press">
            <button className="btn">View more</button>
        </div>
        </div> 

        <main className="portfolio-section" id="portfolio">
        <h3>Gallery</h3>
        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
        <div className="portfolio-container">
            <img src={blog2} alt="" />
            <img src={blog2} alt="" />
            <img src={blog2} alt="" />
            <img src={blog2} alt="" />
            <img src={blog2} alt="" />
            <img src={blog2} alt="" />
        </div>
      </main>
     </div>
  )
}

export default Press