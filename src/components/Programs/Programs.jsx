import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/*header*/}
      <div className="programs-header">
        <span className="stroke-text">Trust</span>
        <span>smart work</span>
        <span className="stroke-text">success</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            <img src={program.icon} alt="Math Symbol" className="icon" />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
