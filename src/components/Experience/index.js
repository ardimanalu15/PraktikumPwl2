import React, { useContext } from "react";

import "./index.css";

const Experience = () => {


  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: 'black'}}>3+</div>
        <span  style={{color: 'black'}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: 'black'}}>8+</div>
        <span  style={{color: 'black'}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: 'black'}}>1+</div>
        <span  style={{color: 'black'}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
