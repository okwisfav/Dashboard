import React from 'react'
import  './setting.css';
const Setting = () => {
  return (
     <div className="setting__container">
          <div className="setting__hero">
                <h2>I can't log in to my account</h2>
                <p>I have a new phone number</p>
          </div>
          <div className="setting__text-area">
                <p>If you can't sign into your account because your phone number has changed, use account recovery to <br /> regain access: </p>

                <ul>
                  <li>Open the Faithmeet app or visit <span>faithmeetslove.com</span> </li>
                  <li>Tap Log In</li>
                  <li>Select the option that asks Trouble Logging In?</li>
                  <li>Tap Login With Email</li>
                  <li>Enter the recovery email address associated with your account and wait for an email from us</li>
                  <li>In the email, click on the magic link and verify your new <span>phone number</span> </li>
                </ul>
                <p>From here on, you'll be able to login to your Tinder account using your new number! </p>
                <p>Account recovery will only work  if you have access to the email address you signed up with. For security reasons, if <br /> you can't access that email address, we can't provide access to the account. </p>

          </div>

            <div className="banned">
                 <h1>  My account was banned</h1>
                 <p>If you’ve been banned from , you’ll see a message letting you
                    know when you try to log in. 
                    We ban accounts when we detect account 
                    activity that violates our Terms of Use or
                     Community Guidelines. User safety is always 
                     at top of mind, and we don’t take violations of
                      our policies lightly. </p>

                      <p>At the moment, we don't offer a formal appeals process.
                         If you’ve been banned, you won’t be able to sign up for 
                         Tinder again using your Facebook account and/or phone number.</p>
            </div>   
     </div>
  )
}

export default Setting