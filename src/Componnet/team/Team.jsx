import React from 'react'
import './team.css';
const Team = ({ Urlimg, text, name }) => {
  return (
    <div class="team-member">
      <img src={Urlimg} alt="" />
        <h4>{name}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Team
