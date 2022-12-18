import React from "react";
import { Link } from "react-router-dom";

const LowerNavbar = () => {
  return (
    <div id="lower-nav">
      <div id="l1">
      <div className="dropdown">
      
      <button className="dropbtn">MAKEUP</button>
       
        <div className="dropdown-content">
        <Link to={'/makeup'}>
        <div className="ddm">
            <div style={{ width: "250px" }}>
              <a>
                <b>Lips</b>
              </a>
              <li>LIPSTICKS</li>
              <li>WONDER WOMAN LIPSTICK RANGE</li>
              <li>LIP CARE</li>
              <li>LIQUID LIP COLOURS</li>
              <li>LIP GLOSS & LINERS</li>
              <li>VALUE SETS</li>
              <li>GIFTING</li>
            </div>
            <div style={{ width: "250px" }}>
              <a>
                <b>FACE</b>
              </a>
              <li>PRIMERS</li>
              <li>POWDER / COMPACT</li>
              <li>FOUNDATION & BB CREAM</li>
              <li>CONCEALERS & CORRECTORS</li>
              <li>BLUSH</li>
              <li>HIGHLIGHTERS & CONTOUR</li>
              <li>BRONZER</li>
              <li>FACE PALETTES</li>
              <li>VALUE SETS</li>
            </div>
            <div style={{ width: "250px" }}>
              <a>
                <b>EYES</b>
              </a>
              <li>EYELINERS</li>
              <li>KAJAL</li>
              <li>EYEBROWS</li>
              <li>EYESHADOW</li>
              <li>MASCARA</li>
              <li>EYESHADOW PALETTES</li>
              <li>VALUE SETS</li>
            </div>
          </div>
        </Link>
         
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">BRUSHES</button>
        <div className="dropdown-content">
          <div className="ddm">
            <div style={{ width: "250px" }}>
              <a >
                <b>FACE BRUSHES</b>
              </a>
              <li>Blend Trend Face Brush - 001 Blush</li>
              <li>Blend Trend Face Brush - 003 Contour</li>
              <li>Blend Trend Face Brush - 006 Highlighter</li>
              <li>Blend Trend Face Brush - 007 Powder</li>
              <li>Blend Trend Foundation Brush - 052 Kabuki</li>
              <li>Blend Trend Dual Face Brush - 075 Powder + Foundation</li>
            </div>
            <div style={{ width: "250px" }}>
              <a >
                <b>EYES BRUSHES</b>
              </a>
              <li>Blend Trend Eyeshadow Brush - 041 Flat</li>
              <li>Blend Trend Eyeshadow Brush - 042 Round</li>
              <li>Blend Trend Eyeshadow Brush - 043 Round Xl</li>
              <li>Blend Trend Dual Eyeshadow Brush - 412 Flat + Round</li>
              <li>Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl</li>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">SKINCARE</button>
        <div className="dropdown-content">
          <Link to={"/skincare"}>
          <div className="CAT">
            <a >MOISTURIZERS</a>
            <a >SUNSCREEN</a>
            <a >COFFEE CULTURE RANGE</a>
            <a >SHEET MASK COMBO</a>
            <a >AQUAHOLIC RANGE</a>
            <a >SETTING MISTS</a>
            <a >CITRUS GOT REAL RANGE</a>
            <a >MASKS</a>
          </div>
          </Link>


        </div>
      </div>
      <div className="dropdown" id="gt">
        <button className="dropbtn">GIFTING</button>
        <div className="dropdown-content">
        <div className="CAT">
            <a >SUGAR MERCH STATION</a>
            <a >MAKEUP KITS</a>
            <a >BESTSELLERS</a>
            <a >VALUE SETS</a>
            <a >SUGAR SETS</a>
            <a >E-GIFT CARDS</a>
          </div>
        </div>
      </div>
      <div className="dropdown" id="bl">
        <button className="dropbtn">BLOG</button>
      
      </div>
      <div className="dropdown" id="ofr">
        <button className="dropbtn">OFFERS</button>
        
      </div>
      <div className="dropdown" id="stor">
        <button className="dropbtn">STORES</button>
     
      </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
