import React from "react";
import "../CSS/PageHero.css";
import { Link, useNavigate } from "react-router-dom";

const PageHero = () => {
  const navigate= useNavigate()
  function makeup_page(){
   navigate("/makeup")
  }


  return (
    <div>
      <div className="body">
        
        <div className="b-img"></div>
        <div className="b-txt">
          <img
            className="imgblur"
            src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg"
            alt=""
          />
        </div>
      </div>
      
      <div className="upper_section">
      
        <p>Home</p>
        <i id="right_section" className="fa-solid fa-angle-right"></i>
        <p onClick={makeup_page}>Click Here!</p>
        
      </div>
         
    </div>
    
  );
  
};

export default PageHero;
