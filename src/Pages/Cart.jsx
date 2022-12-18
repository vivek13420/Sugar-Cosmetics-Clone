import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillDelete } from "react-icons/ai";
import "../CSS/Cart.css"

const Cart = () => {
    const [cart, setCart]= useState([])


    
useEffect(()=>{
    fetch("http://localhost:3001/cart").then((result)=>{
    result.json().then((resp)=>{
        console.log(resp)
        setCart(resp)
    })
})
},[])

  return (
    <div>
    
    
      <div className='cart_page'>
        <div>
{
        cart.map(cart=>{
            return(
                <>
                <hr />
                <div className='left_cart'>
                <div>
                    <img src={cart.img} alt="" width="80px" height="80px"/>
                </div>
                
                <div>
                <p>{cart.products_name} </p>
                <h2>₹849</h2>


                </div>
                
                <div>
                    
                    <p> + 1 -</p>
                </div>
                    
                </div>
                </>
            )
        })
      }
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
        </div>
      </div>
      

    </div>
  )
}

export default Cart
