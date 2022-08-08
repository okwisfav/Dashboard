import React from 'react'
import safe from '../../assets/Safety.svg';
import './safety.css'
function safety() {
  return (
    <div>
        <div className='Safety-conter'>
            <h1>Safety Center</h1>
            <p>BubbySafe believes in Online safety and we
                continually work to improve 
                the safety and security of your 
                experience on our platform. .</p>
        </div>

        <section className='home'>
         <div className='home-flex'>
            <h3>Lorem ipsum dolor sit amet conse <br /> ctetur adipisicing elit.</h3>
                <p>See below about the work we do and the steps you can take towards protecting yourself <br /> and securing your data.</p>    
         </div>
            <div className='flex-img'>
                <img src={safe} alt="" />
            </div>
        </section>

        <section className='home'>
        <div className='flex-img'>
                <img src={safe} alt="" />
            </div>
         <div className='home-flex'>
         <h3>Lorem ipsum dolor sit amet conse <br /> ctetur adipisicing elit.</h3>
                <p>See below about the work we do and the steps you can take towards protecting yourself <br /> and securing your data.</p>    
         </div>
        </section>
    </div>
  )
}

export default safety
