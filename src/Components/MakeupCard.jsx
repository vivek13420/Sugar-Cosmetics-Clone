import React from "react";
import { useToast, Button } from "@chakra-ui/react";
import "../CSS/MakeupCard.css";
import ToastExample from "./Toast";
import { NavLink } from "react-router-dom";
import CustomizedSnackbars from "./Toast";
import { toast } from "react-hot-toast";

const MakeupCard = ({ makeupData, handler }) => {
  const whiteLists = () => {
    toast.success("Add white list");
  };

  const toast = useToast();
  return (
    <div>
      <div className="mk-img">
        <NavLink className="nnnn" to={`/sugarcan/${makeupData.id}`}>
          <img className="card_img" src={makeupData.img} alt="" width="160px" />
          <p className="p_name">{makeupData.products_name}</p>
          <br />
          <p>{makeupData.shades}</p>
          <br />
          <h1 className="price-m">₹{makeupData.price}</h1>
          <br />
          <p>
            {" "}
            {makeupData.rating} {makeupData.rating_count}{" "}
          </p>
          <br />
          <br />
        </NavLink>
        <div className="makup_button">
          <div className="white-list" onClick={whiteLists}>
            <i className="fa-regular fa-heart"></i>
          </div>
          {/* <CustomizedSnackbars onClick={() => handler({ makeupData })} /> */}

          <br />
          {/* <Button >addd</Button> */}
          <i class="btn" onClick={() => handler({ makeupData })}><p>Add To Cart</p></i>
        </div>
      </div>
    </div>
  );
};

export default MakeupCard;
