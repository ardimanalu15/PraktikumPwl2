import React, { useContext } from "react";
import "./index.css";
import Card from "../Card/index";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ }}>My Awesome</span>
        <span>services</span>
        <spane style={{fontSize: "20px"}}>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front End"}
            detail={"Html, Css, JavaScript, React, Tailwindcss, Bootstrap"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-15rem", top: "12rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Back End"}
            detail={"Laravel, Codeigniter"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "16rem", left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Figma, Adobe xd, SUS"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
