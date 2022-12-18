import React from "react";
import "./Payment.css";
import {Link, useNavigate} from 'react-router-dom'
const Payment = () => {
  const navigate= useNavigate()
  const payNavigate=()=>{
    navigate("/payment")
  }
  return (
    <div>
      <div className="body">
        <div className="b-img"></div>
        <div className="b-txt">
          <img
            className="imgblur"
            src="https://d32baadbbpueqt.cloudfront.net/Collection/8f07ca3c-f4b8-4f74-b763-f77721dc46b8.jpg"
            alt=""
          />
        </div>  
      </div>
      <div className="upper_section">
        <p>Home</p>

        <i id="right_section" className="fa-solid fa-angle-right"></i>
        <p>Payment</p>
      </div>

      <div id="info_section">
        <h1><u>CONTINUE AS GUEST</u></h1>

        <div id="details">
          <input  type="text" placeholder="First Name-*" required="required"/>
          
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Company Name"/>
          <input type="email"  placeholder="Email Id-*" required="required"/>
          <input type="number" placeholder="Mobile Number-*" required="required"/>
          <input type="number" placeholder="Flat Number" />
          <input type="text" placeholder="Apartment Address" />
          <input type="text" placeholder="ZipCode/PinCode" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Country"/>
        </div>
        <div id="bill"><b>Your Total Bill is:</b>  ₹1299</div>
        <div id="faisla">
          <button id="cancel">Cancel</button>
          
          <button onClick={payNavigate} id="proceed">Proceed To Pay</button>
         
        </div>
      </div>
    </div>
  );
};

export default Payment;
