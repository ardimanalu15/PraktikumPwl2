import React, { useContext } from "react";
import "./index.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import g10 from "../../img/g10.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import minion from "../../img/minion.png";

import { motion } from "framer-motion";

import { Link } from "react-scroll";
import Spline from "@splinetool/react-spline";

const IntroHome = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      {/* <Spline className="realtive"  id="home" scene="https://prod.spline.design/aynnGD24ar7ATksT/scene.splinecode" /> */}
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hy! I Am</span>
          <span>Ardi Gaya Manalu</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" style={{ marginLeft: 5 }} />
          <img src={LinkedIn} alt="" style={{ marginLeft: -40 }} />
          <img src={Instagram} alt="" style={{ marginLeft: -45 }} />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector3} alt="" />

        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
      
          initial={{ top: "-25%", left: "-36%" }}
          whileInView={{ left: "-15%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          style={{ height: 250, width: 400 }}
        />

        <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          animate="visible"
          initial={{ top: "-4%", left: "90%", right: "10%" }}
          whileInView={{ left: "68%", right: "32%" }}
          transition={transition}
          src={minion}
          alt=""
          style={{ height: 150, width: 150 }}
        />

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}
      
        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={g10} text1="Teknik Informatika" text2="ITERA"  />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>

    // <div className="Intro" id="Intro">
    //   {/* left name side */}
    //   <div className="i-left">
    //     <div className="i-name">
    //       {/* yahan change hy darkmode ka */}
    //       <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
    //       <span>Andrew Thomas</span>
    //       <span>
    //         Frontend Developer with high level of experience in web designing
    //         and development, producting the Quality work
    //       </span>
    //     </div>
    //     <Link to="contact" smooth={true} spy={true}>
    //       <button className="button i-button">Hire me</button>
    //     </Link>
    //     {/* social icons */}
    //     <div className="i-icons">
    //       <img src={Github} alt="" />
    //       <img src={LinkedIn} alt="" />
    //       <img src={Instagram} alt="" />
    //     </div>
    //   </div>
    // {/* right image side */}
    // <div className="i-right">
    //   <img src={Vector1} alt="" />
    //   <img src={Vector2} alt="" />
    //   <img src={boy} alt="" />
    //   {/* animation */}
    //   <motion.img
    //     initial={{ left: "-36%" }}
    //     whileInView={{ left: "-24%" }}
    //     transition={transition}
    //     src={glassesimoji}
    //     alt=""
    //   />

    //   <motion.div
    //     initial={{ top: "-4%", left: "74%" }}
    //     whileInView={{ left: "68%" }}
    //     transition={transition}
    //     className="floating-div"
    //   >
    //     <FloatinDiv img={crown} text1="Web" text2="Developer" />
    //   </motion.div>

    //   {/* animation */}
    //   <motion.div
    //     initial={{ left: "9rem", top: "18rem" }}
    //     whileInView={{ left: "0rem" }}
    //     transition={transition}
    //     className="floating-div"
    //   >
    //     {/* floatinDiv mein change hy dark mode ka */}
    //     <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
    //   </motion.div>

    //   <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
    //   <div
    //     className="blur"
    //     style={{
    //       background: "#C1F5FF",
    //       top: "17rem",
    //       width: "21rem",
    //       height: "11rem",
    //       left: "-9rem",
    //     }}
    //   ></div>
    // </div>
    // </div>
  );
};

export default IntroHome;
