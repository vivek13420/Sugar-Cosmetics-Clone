import React from "react";
import LowerNavbar from "./LowerNavbar";
import UpperNavbar from "./UpperNavbar";
import { FaUserCircle, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div>
        <UpperNavbar />
      </div>
      <div id="mainNavbar">
        
        <img
          id="logoImage"
          src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"
          alt="logo"
        />
        
        <div id="lg">
          <input placeholder="     Try `Liquid Lipstick`" id="searchBar" />
          <button id="searchButton">
            <FiSearch size={15} /> Search
          </button>
        </div>
        <div id="lr">
          <FaUserCircle />  
          <p>Login/Register</p>
        </div>
        <div id="hbd">
          <div>
            <FaRegHeart />
          </div>
          <div>
            <FaShoppingBag />
          </div>
          <div>
            <TbDiscount2 />
          </div>
        </div>
      </div>
      <div>
        <LowerNavbar />
      </div>
    </div>
  );
};

export default Navbar;
