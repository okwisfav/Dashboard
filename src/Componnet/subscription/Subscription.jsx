import React from 'react'
import './subscription.css'
const Subscription = () => {
  return (
    <div>
      <section className="pricing">

<h1 className="heading"> our <span>Subscription</span> </h1>

<div className="box-container">

    <div className="boxs" >
        <h3> basic plan </h3>
        <div className="price">
            <span>$</span>
            <span className="amount">30</span>
            <span>/mo</span>
        </div>
        <ul>
            <li>30 days</li>
            <li>More likes</li>
            <li>safty guide</li>
            <li>insurance</li>
            <li>More Comment</li>
        </ul>
        <a href="#" className="btn">choose plan</a>
    </div>

    <div className="boxs">
        <h3> standard plan </h3>
        <div className="price">
            <span>$</span>
            <span className="amount">50</span>
            <span>/mo</span>
        </div>
        <ul>
            <li>30 days</li>
            <li>More likes</li>
            <li>safty guide</li>
            <li>insurance</li>
            <li>More Comment</li>
        </ul>
        <a href="#" className="btn">choose plan</a>
    </div>

    <div className="boxs">
        <h3> premium plan </h3>
        <div className="price">
            <span>$</span>
            <span className="amount">90</span>
            <span>/mo</span>
        </div>
        <ul>
            <li>30 days</li>
            <li>More likes</li>
            <li>safty guide</li>
            <li>insurance</li>
            <li>More Comment</li>
        </ul>
        <a href="#" class="btn">choose plan</a>
    </div>

</div>

</section>
    </div>
  )
}

export default Subscription