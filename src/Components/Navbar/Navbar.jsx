import React from "react";
import LowerNavbar from "./LowerNavbar";
import UpperNavbar from "./UpperNavbar";
import { FaUserCircle, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";


const Navbar = () => {
  const navigate= useNavigate()
  const imgHome=()=>{
    navigate("/")
  }
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  //console.log(userName)
  return (
    <div id="nav-sticky">
      <div>
        <UpperNavbar />
      </div>
      <div id="mainNavbar">     
        <img onClick={imgHome}
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
          <Link to={'/login'}> 
          <p>{userName ? `Hi - ${userName}` : "Login/Register"}</p>
          </Link>
        </div>
        <div id="hbd">
        <Link to={'/cart'}> 
        <div>
            <FaRegHeart />
          </div>
          </Link>
          

          <Link to={"/cart"}>
          <div className="redCart" >
            <FaShoppingBag />
          </div>
          </Link>
          <Link to={'/makeup'}> 
          <div>
            <TbDiscount2 />
          </div>
          </Link>
          
        </div>
      </div>
      <div>
        <LowerNavbar />
      </div>
    </div>
  );
};

export default Navbar;
