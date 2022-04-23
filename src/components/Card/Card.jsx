// import React from 'react'
import React, {useState} from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
const Card = (props) => {

  const [expanded, setExpanded]= useState(false)

  return (
        <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </AnimateSharedLayout>
      )
}

//CompactCard
function CompactCard ({param, setExpanded}){
  const Png = param.png;
  return(
    <div className="CompactCard" 
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        onClick={setExpanded}
      >
        <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
        </div>
         <div className="detail">
             <Png/>
             <span>${param.value}</span>
              <span>last 24 hours</span>
         </div>
    </div>
  )
}

//ExpordedCard
function ExpandedCard({param,setExpanded}){
   return(
     <div className="expandedCARD"
      style={background: param.color.background}
     >

     </div>
   )
}
export default Card