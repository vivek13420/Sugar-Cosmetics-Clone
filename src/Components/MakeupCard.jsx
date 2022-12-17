import React from 'react'
import { useToast,Button } from '@chakra-ui/react'
import "../CSS/MakeupCard.css"
import ToastExample from './Toast'
import { NavLink } from 'react-router-dom';
import CustomizedSnackbars from './Toast'
const MakeupCard = ({makeupData}) => {

    const toast = useToast()
  return (
    <div >
    <div className='mk-img'>
    <NavLink className="nnnn" to={`/sugarcan/${makeupData.id}`}>
      <img className='card_img' src={makeupData.img} alt="" width="160px"/>
      <p className='p_name'>{makeupData.products_name}</p>
      <br />
      <p>{makeupData.shades}</p>
      <br />
      <h1 className = 'price-m'>₹{makeupData.price}</h1>
      <br />
      <p> {makeupData.rating} {makeupData.rating_count} </p>
      <br />
      <br />
      </NavLink>
      <div className='makup_button'>


      
      <div className='white-list'><i className="fa-regular fa-heart"></i></div>
        <CustomizedSnackbars/>
       
      </div>
    </div>
    </div>
  )
}

export default MakeupCard
