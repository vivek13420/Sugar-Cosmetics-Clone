import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillDelete } from "react-icons/ai";
import {AiFillCodepenCircle} from "react-icons/ai";
import "../CSS/Cart.css"
import { Link } from 'react-router-dom';
import { shouldForwardProp } from '@chakra-ui/react';

const Cart = () => {
    const [cart, setCart]= useState([])


    
useEffect(()=>{
    getMakeup()
},[1])
function getMakeup(){
    fetch("http://localhost:3001/cart").then((result)=>{
    result.json().then((resp)=>{
        //console.log(resp)
        setCart(resp)
    })
})
}
function deleteItem(id){
    fetch(`http://localhost:3001/cart/${id}`,{
        method:"DELETE"
    }).then((result)=>{
        result.json().then((resp)=>{
            //console.log(resp)
            getMakeup()
        })
    })
}
function show_pop(){
alert("Sorry! Coupon Not Applicable At The Moment");
}

//console.log(cart.length)
let data = JSON.parse(localStorage.getItem("cartitem"));
  console.log(data);

  return (
    <div>
    
    
      <div className='cart_page'>
        <div>
        {/* { cart.map(cart=>{ */}
            {/* return( */}
                <>
                <hr />
                <div className='left_cart'>
                <div>
                    <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75" alt="" width="80px" height="80px"/>
                </div>
                
                <div>
                <p>Contour De Force Eyes And Face </p>
                <h2>₹1200</h2>
                </div>

                <div onClick={()=>deleteItem(cart.id)}>
                <AiFillDelete/>
                {/* <button >Del</button> */}
                </div>


                <div>
                    <p> + 1 -</p>
                </div>
                    
                </div>
                </>
            {/* ) */}
        {/* })
      } */}
        </div>
        <div>
            {
                cart.map(cart=>{
                    return(
                        <>
                            
                        </>
                    )
                })
            }
           <div >
            <p >APPLY COUPON</p>
            <div className='coupon'>
                <input type="text" placeholder='Enter Gift code or discount code' />
                <button onClick={show_pop}>Apply</button>
                <hr />
                <div>
                    <p><AiFillCodepenCircle/> </p>
                    <p>  View All Offers/ Promos for you!</p>
                </div>
                
            </div>
            <p>PRICE DETAILS</p>
            <div className='price'>
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
           <button id='proceedto'>PROCEED TO PAY</button>
           </Link>
        </div>
        
      </div>
      
            
    </div>
    
  )
}

export default Cart
