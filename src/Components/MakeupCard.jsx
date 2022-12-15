import React from 'react'
import { useToast,Button } from '@chakra-ui/react'
import "../CSS/MakeupCard.css"
import ToastExample from './Toast'
import CustomizedSnackbars from './Toast'
const MakeupCard = ({makeupData}) => {

    const toast = useToast()
  return (
    <div >
    <div className='mk-img'>
      <img className='card_img' src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg%3Fv%3D1644394232&w=256&q=75" alt="" width="160px"/>
      <p>Matte As Hell Crayon Lipstick</p>
      <br />
      <p>{makeupData.category}</p>
      <br />
      <h1 className = 'price-m'>₹849</h1>
      <br />
      <p> 4.8 (951) </p>
      <br />
      <br />
      <div className='makup_button'>
      <div className='white-list'><i className="fa-regular fa-heart"></i></div>
        <CustomizedSnackbars id="aa"/>
       
      </div>
    </div>
    </div>
  )
}

export default MakeupCard
