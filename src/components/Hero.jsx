import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import NumberCounters from "number-counter";
import { motion } from "framer-motion";

export const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Instilling Knowledge, inspiring stories</span>
        </div>

        {/*Hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Ready to </span>
            <span>level up</span>
          </div>
          <div>
            <span>your math skills</span>
          </div>
          <div>
            <span>
              "Unlock your true potential - learn smart, score high and build a
              future full of possibilities"
            </span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounters end={15} start={8} delay="4" preFix="+" />
            </span>
            <span>Expert Teachers</span>
          </div>
          <div>
            <span>
              <NumberCounters end={460} start={400} delay="4" preFix="+" />
            </span>
            <span>Successful Students</span>
          </div>
          <div>
            <span>
              <NumberCounters end={25} start={18} delay="4" preFix="+" />
            </span>
            <span>Subjects Offered</span>
          </div>
        </div>
        {/*hero buttons*/}
       
      </div>
      <div className="right-h">
        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calories */}
      </div>
    </div>
  );
};

export default Hero;
