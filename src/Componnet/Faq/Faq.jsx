import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
      <div className="faq__container">
          <div className="faq__hero-header">
               <h1>Frequently Asked Questions</h1>
               <p>If you’re trying to get to know us better, you’ve come to the right place. This is Tinder at a glance.</p>
               <button className='btn'>Join Now</button>
          </div>

          <div className="faq__list">
               <h2>All About Your Profile and Matches</h2>
               <div className="faq__list-text">
                   <h4>What Faithmeet® picture should I use? </h4>
                   <p>Upload photos to Tinder® that feature who everyone came to see:
                        you! Ditch your friends because this isn’t about them and remove
                         the sunglasses because they hide your face. The best pics are in focus
                          and some say a smile goes a long way here.</p>
                          <h4>What should I put in my bio? </h4>
                      <p>Your bio is a snapshot of who you are. If writing isn’t your thing, you can make a 
                        list of things you like or want. Keep it light and 
                        talk about your hobbies or go deep and talk about what you’re
                         looking for in a match. For info on what not to include in 
                         your bio, check out our Community Guidelines.</p>

                         <h4>How do I unmatch someone? </h4>
                           <p>If you’re having second thoughts about someone you Liked—no problem.
                            You can unmatch anyone at any time. 
                            Tap the blue shield in either your match’s 
                            profile or the chat to go to the Safety Toolkit and unmatch.</p>

                            <h4>How do Faithmeet® matches work? </h4>
                           <p>Two members must both use the Swipe Right® 
                              feature to Like each other in order to make a match.</p>

                              <h4>What happens when Faithmeet® says you missed a match?</h4>
                           <p>When we tell you that you missed a match it means you used the Swipe Left™ feature on someone who Liked you.</p>
                            <h2>All About How  Faithmeet® Works</h2>

                            <h4>Is Faithmeet® free? </h4>
                           <p> Faithmeet® can be downloaded for free in the App Store and Google
                                 Play Store or visit https://tinder.com to use Tinder for Web. Basic features let you 
                                 create a profile, use the Swipe Right® feature to Like someone and
                                  use the Swipe Left™ feature to pass</p>

                                  <h4>How does Faithmeet® work? </h4>
                                  <p> Tinder® connects you with profiles using
                                        location-based technology based 
                                on the gender, distance, and orientation filters you set.</p>

                                <h4>Are Faithmeet® profiles real? </h4>
                                  <p> Faithmeet® connects you with profiles using
                                        location-based technology based 
                                on the gender, distance, and orientation filters you set.</p>

                                <h4>Can Faithmeet® be used on a laptop? </h4>
                                  <p> For those of you seeking a desktop experience, 
                                       you can enjoy most of our features on https://faithmeetslove.com/.</p>
               </div>
          </div>
      </div>
  )
}

export default Faq