
import React from "react";
import "./index.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: "rgba(15, 252, 244, 1)"}}> 
      <img src={emoji} alt=""  style={{ height: 150, width: 150 }}/>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
