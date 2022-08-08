import React from 'react'
import secur from '../../assets/security.jpg';
import './security.css'
const security = () => {
  return (
      <div className="security">
          <h2>Security & Report</h2>
            <div className="security__img">
                    <img src={secur} alt="" />
            </div>

            <div className="security__text">
                <h3>A Secure and Trusted Place to Spark New Connections</h3>
                <p>The Faith Security Engineering team’s mission is to build the
                     best security organization in the world, ensuring our members have a secure place to spark new connections.
                      Because you entrust Tinder with your information, the security of our application, and the privacy of your data is a top priority. 
                      Ensuring that we maintain a robust, transparent, and accountable security program is core to our commitment to you.</p>

                <h3>Internal Faithmeet Security Practices</h3>
                <p>The security program at Tinder protects our organization 
                    and your data at every turn utilizing a combination of
                     industry-leading security infrastructure,
                     responsible data practices, and security best practices 
                     to stay ahead of the evolving number of threats facing all 
                     internet services and infrastructure. Our security program 
                     is focused on the following domains:</p>
                     <p>Internal Information Security Program:
                          We strive to increase security and reduce
                           risk within our digital environment. We proactively
                            build secure access protocols and network architecture 
                            to enable systematic control of internal access to 
                            Tinder’s facilities, systems, and resources, using the least privilege paradigm.
                             Tinder enforces the use of two-factor authentication (2FA) internally. </p>

                      <h3>Compliance Certifications, Standards, and Regulations</h3>
                       <p>Tinder is the first dating app to be recognized for comprehensive information 
                           security practices in accordance with internationally accepted standards, 
                           achieving the ISO/IEC 27001:2013
                            certification for our Information Security Management System.</p>       
            </div>
      </div>
  )
}

export default security