import React from "react";
import "../CSS/SkicareCard.css";
const Card = ({ skincareData }) => {
  return (
    <div>
      <div className="skincare-img">
        <img className="imge" src={skincareData.img} alt="" width="160px" />
        <p>{skincareData.products_name}</p>
        <br />
        <p>{skincareData.category}</p>
        <br />
        <h1 className="pric">₹ {skincareData.price}</h1>
        <br />
        <p>{skincareData.shades}</p>
        <br />
        <br />
        <div className="skincare_button">
          <div className="skincare-list">
            <i className="fa-regular fa-heart"></i>
          </div>
         <i class="btn"><p>Add To Cart</p></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
