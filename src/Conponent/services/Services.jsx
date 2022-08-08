import React from 'react'
import Feature from '../feature/Feature';
import './services.css';
const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Bubbysafe',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
  ];

const Services = () => {
    return (
            <div>
                <div className='bubbysafe__service'>
             <div className="bubbysafe__features">
                <div className="bubbysafe__features-heading">
                <h1>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
                </div>
                <div className="bubbysafe__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
                </div>
            </div>
         </div>
         <div className="bubbysafe__container-text">
                 <div className="bubby__text">
                     <h1>More topics</h1>
                 </div>
                 <div className='bubbysafe__text-content'>
                     <h1>Manage Emails from LinkedIn</h1>
                     <p>You can manage the types and frequency of emails
                          from LinkedIn and even choose to stop specific 
                          emails by unsubscribing. 
                         To manage email from your desktop: 
                         Click the Me icon at the top of your LinkedIn homepage…</p>

                         <h1>Manage Emails from LinkedIn</h1>
                     <p>You can manage the types and frequency of emails
                          from LinkedIn and even choose to stop specific 
                          emails by unsubscribing. 
                         To manage email from your desktop: 
                         Click the Me icon at the top of your LinkedIn homepage…</p>

                         <h1>Manage Emails from LinkedIn</h1>
                        <p>You can manage the types and frequency of emails
                          from LinkedIn and even choose to stop specific 
                          emails by unsubscribing. 
                         To manage email from your desktop: 
                         Click the Me icon at the top of your LinkedIn homepage…</p>

                         <h1>Visibility and Impact of Your Social Activity on the LinkedIn Feed</h1>
                         <p>You can manage the types and frequency of emails
                          from LinkedIn and even choose to stop specific 
                          emails by unsubscribing. 
                         To manage email from your desktop: 
                         Click the Me icon at the top of your LinkedIn homepage…</p>
                 </div>
            </div>
        </div>
    
    )
}

export default Services