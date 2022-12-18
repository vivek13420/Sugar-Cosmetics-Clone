import React from "react";

const LowerNavbar = () => {
  return (
    <div id="lower-nav">
      <div id="l1">
      <div class="dropdown">
        <button class="dropbtn">MAKEUP</button>
        <div class="dropdown-content">
          <div className="ddm">
            <div style={{ width: "250px" }}>
              <a href="#">
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
              <a href="#">
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
              <a href="#">
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
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">BRUSHES</button>
        <div class="dropdown-content">
          <div className="ddm">
            <div style={{ width: "250px" }}>
              <a href="#">
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
              <a href="#">
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
      <div class="dropdown">
        <button class="dropbtn">SKINCARE</button>
        <div class="dropdown-content">
          <div className="CAT">
            <a href="#">MOISTURIZERS</a>
            <a href="#">SUNSCREEN</a>
            <a href="#">COFFEE CULTURE RANGE</a>
            <a href="#">SHEET MASK COMBO</a>
            <a href="#">AQUAHOLIC RANGE</a>
            <a href="#">SETTING MISTS</a>
            <a href="#">CITRUS GOT REAL RANGE</a>
            <a href="#">MASKS</a>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button id="gt" class="dropbtn">GIFTING</button>
        <div class="dropdown-content">
        <div className="CAT">
            <a href="#">SUGAR MERCH STATION</a>
            <a href="#">MAKEUP KITS</a>
            <a href="#">BESTSELLERS</a>
            <a href="#">VALUE SETS</a>
            <a href="#">SUGAR SETS</a>
            <a href="#">E-GIFT CARDS</a>
          </div>
        </div>
      </div>
      <div id="bl" class="dropdown">
        <button class="dropbtn">BLOG</button>
      
      </div>
      <div id="ofr" class="dropdown">
        <button class="dropbtn">OFFERS</button>
        
      </div>
      <div id="stor" class="dropdown">
        <button class="dropbtn">STORES</button>
     
      </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
