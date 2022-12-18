import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMakeup } from '../Redux/AppReducer/action'
import axios from 'axios'
import CustomizedSnackbars from '../Components/Toast'
import "../CSS/SinglePage.css"
import Description from './Description'
import { Button } from '@material-ui/core'
import { toast } from 'react-hot-toast';
const SinglePage = () => {

  const {id}= useParams()
  const [single, setSingle]= useState({})

    useEffect(()=>{
      axios.get(`https://nordstrom1.onrender.com/api/sugarcan/${id}`)
      .then((r)=>{
          setSingle({...r.data})
        })
        .catch((e)=>{
        })
    },[setSingle])
    

const postCart  = ()=>{
  fetch("http://localhost:3001/cart", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body:JSON.stringify(single)
  }).then((resp)=>{
    
    resp.json().then((result)=>{
      console.warn("result",result)
      toast.success("Added To Cart");
    })
  })
}
const whiteList=()=>{
  toast.success("Add white list");
}


// console.log(single.price)
  return (
    <div className='single_img_left_head'>
    <div className='single_img_left'>
          {/* 1st div */}
          <div className='single_img1'>
            <div>
              <div><img src={single.img1} alt="mm" width="100%"/></div>
              <div><img src={single.img2} alt="mm" /></div>
              <div><img src={single.img3} alt="mm" /></div>
              <div><img src={single.img4} alt="mm" /></div>
            </div>

            <div >
              <div id='single_img2'><img src={single.img} alt="a" width="100%" /></div>
              
            </div>
          </div>



          {/* 2nd div */}
          <div  id='single_img_left'>
            <p>{single.products_name}</p>
            <div id='price'>
            <h2>₹{single.price}.00</h2>
            <p className='ship'>FREE SHIPPING</p>
            <p>(T&C applicable)</p>
            </div>
          
           
           <div id='desciption'>
            <p>AVAILABLE OFFERS!!</p>
            <Description>
            Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999
            Two Offers Cannot Be Clubbed. Gifts Once Chosen Cannot Be Exchanged Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999.
            </Description>
            <Description>
            Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999
            Terms & Conditions :
            Two Offers Cannot Be Clubbed. Gifts Once Chosen Cannot Be Exchanged.
            </Description>
           
           </div>
           <div className='white-list1' onClick={whiteList}>< i className="fa-regular fa-heart"></i>
           <button id='button_cart' onClick={postCart} >ADD TO CART</button>
           </div>
           
          </div>
          
    </div>
    </div>
  )
}

export default SinglePage