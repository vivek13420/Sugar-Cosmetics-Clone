import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";
import { shouldForwardProp } from "@chakra-ui/react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getMakeup();
  }, [1]);
  function getMakeup() {
    fetch("http://localhost:3001/cart").then((result) => {
      result.json().then((resp) => {
        setCart(resp);
      });
    });
  }
  function deleteItem(id) {
    fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        getMakeup();
      });
    });
  }
  function show_pop() {
    alert("Sorry! Coupon Not Applicable At The Moment");
  }

  let data = JSON.parse(localStorage.getItem("cartitem"));

  return (
    <div>
      <div className="cart_page">
        <div>
          
          <>
            {data &&
              data.map((elem) => (
                <div className="left_cart">
                  <div>
                    <img src={elem.img} alt="" width="80px" height="80px" />
                  </div>

                  <div>
                    <p>{elem.products_name}</p>
                    <h2>{elem.price}</h2>
                  </div>

                  <div onClick={() => deleteItem(cart.id)}>
                    <AiFillDelete />
                  </div>

                  <div>
                    <p> + 1 -</p>
                  </div>
                </div>
              ))}
          </>
        </div>
        <div>
          {cart.map((cart) => {
            return <></>;
          })}
          <div>
            <p>APPLY COUPON</p>
            <div className="coupon">
              <input
                type="text"
                placeholder="Enter Gift code or discount code"
              />
              <button onClick={show_pop}>Apply</button>
              <hr />
              <div>
                <p>
                  <AiFillCodepenCircle />{" "}
                </p>
                <p> View All Offers/ Promos for you!</p>
              </div>
            </div>
            <p>PRICE DETAILS</p>
            <div className="price">
              <div>
                <p>Subtotal (Inclusive of Taxes)</p>
                <p>Tax</p>
                <p>Shipping</p>
                <hr />
                <h2>TOTAL</h2>
              </div>
              <div>
                <p>₹1200</p>
                <p>₹99</p>
                <p>Free</p>
                <hr />
                <h2>₹1299</h2>
              </div>
            </div>
          </div>
          <Link to={"/details"}>
            <button id="proceedto">PROCEED TO PAY</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
