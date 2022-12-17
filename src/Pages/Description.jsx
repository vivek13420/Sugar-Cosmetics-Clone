import React from 'react'
import { useState } from 'react'
import "../CSS/SinglePage.css"
const Description = ({children}) => {
  const [readMore, setreadMore]= useState(false)
  const toggleBtn = () =>{
    setreadMore(prevState=> !prevState)
  }
  
  
  return (
    <div className='desciption'>
     {readMore ? children: children.substr(0,65)}
     <br />
     <p className='para' onClick={toggleBtn}>{readMore ? "Read Less": "Read More"}</p>
    </div>
     
  )
}

export default Description
