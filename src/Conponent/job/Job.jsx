import React from 'react'
import imgone from '../../assets/imgone.png';
export default function Job() {
  return (
    <div className="bubby__container">
    <div className= "visibility">
         <h1>Our visibility</h1>
         <p>Our visibility is embedded in our name. Reliance revolves around reliability, quality, commitment satisfaction and professionalism.</p>
    </div>
    <section className='home'>
     <div className='home-flex'>
        <h3>Let's work together to keep <br /> your account secure</h3>
            <p>See below about the work we do and the steps you can take towards protecting yourself <br /> and securing your data.</p>    
     </div>
        <div className='flex-img'>
            <img src={imgone} alt="" />
        </div>
    </section>

    <section className='home'>
    <div className='flex-img'>
            <img src={imgone} alt="" />
        </div>
     <div className='home-flex'>
        <h3>Let's work together to keep <br /> your account secure</h3>
            <p>See below about the work we do and the steps you can take towards protecting yourself <br /> and securing your data.</p>    
     </div>
    </section>

    <div className="bubby__about-text"> 
  <h1>How To Set Your Account Password</h1>
  <p>Thank You For Using Uneleap, Where The World’s Professionals Come Together To Find Jobs, Stay Informed, Learn New Skills,
       And Build Productive Relationships. The Content That You Contribute To Uneleap Should Be Professionally Relevant And Meant To Contribute
       To The Uneleap Community In A Constructive Manner.These Community Policies Continually Evolve To Ensure Our Members Have A Safe, 
      Trusted, And Professional Experience On Uneleap</p>
</div>
    <div className="bubby__about-text"> 
    <h1>How To  Recover Hacked Account</h1>
    <p>Do Not Share Content In A Way That You
        Know Is, Or Think May Be, Misleading
            Or Inaccurate, Including Misinformation Or Disinformation. Do Not Share Content To Interfere With Or Improperly Influence An Election Or Another Civic Process. We May Prevent You From Posting Content From Sites That Are Known To Produce Or Contain Misinformation. Do Not Share Content That Directly Contradicts Guidance From Leading Global Health Organizations And Public Health Authorities. Do Not Post Content That Denies A Well-Documented Historical Event Such As The Holocaust Or Slavery. Do Not Share 
            False Content Or Information, Including News Stories, That Present Untrue Facts Or Events As Though They Are True Or Likely True. Do Not Post “Deepfake” Images Or Videos Of Others Or Otherwise Post Content That Has Been Manipulated To Deceive.Do Not Share Content Or Endorse Someone Or Something In Exchange For Personal Benefit (Including Personal Or Family Relationships, Monetary Payment, Free Products Or Services, Or Other Value),
            Unless You Have Included A Clear And Conspicuous Notice Of The Personal Benefit You Receive And Have Otherwise Complied With Our Advertising Policies.</p>
    </div>
</div>    
  )
}
