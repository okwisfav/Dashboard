import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/phone.svg';
import './download.css';
const Download = () => {
  return (
    <div>
       <div className="Faithmeet__header section__padding">
       <div className="Faithmeet__header-content">
      <h1 className="Faithmeet__text">Meet New People Today</h1>

      <div className="Faithmeet__header-content__input">
        <button type="button">Download Faithmeet</button>
      </div>

      <div className="Faithmeet__header-content__people">
        <img src={people} />
        <p>1,600 people have download</p>
      </div>
    </div>

    <div className="Faithmeet__header-image">
      <img src={ai} />
     </div>
    </div>

     <div className="download-text">
         <h2>Supported Platforms and Devices</h2>
         <p>Faithmeet is currently available on  <span> iOS, Android, 
           and HMS devices.</span> Along with our mobile apps,
            you can visit Faithmeet.com to use Faithmeet for Web.</p>

            <p>We also offer a lightweight version of Faithmeet you can take anywhere and everywhere - download Faithmeet Lite from the Google Play store.</p>
             <p>Tinder currently supports iOS 12.0 and up, Android 7.0 and up, and the latest versions of all major web browsers (Chrome, Firefox, Safari, Edge, etc.).</p>
     </div>
  </div>
  )
}

export default Download