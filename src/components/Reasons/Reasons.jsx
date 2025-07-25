import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Free Demo Class for New Students</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>Expert Guidance with Individual Attention</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Unit-Wise Assessments for Steady Progress</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Curated Important Questions for Exam Focus</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Flexible Timing to Suit Every Student’s Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
