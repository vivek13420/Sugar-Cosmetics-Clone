import React from "react";
import "../CSS/Skincare.css";

const UpperHero = () => {
  return (
    <div>
      <div className="body">
        <div className="b-img"></div>
        <div className="b-txt">
          <img
            className="imgblur"
            src="https://d32baadbbpueqt.cloudfront.net/Collection/1c906769-7b7f-4589-8bf6-a089d9c6cebb.gif"
            alt=""
          />
        </div>
      </div>
      <div className="upper_section">
        <p>Home</p>

        <i id="right_section" className="fa-solid fa-angle-right"></i>
        <p>SkinCare</p>
      </div>
    </div>
  );
};

export default UpperHero;
