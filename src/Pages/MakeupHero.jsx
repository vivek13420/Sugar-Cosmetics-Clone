import React from 'react'
import '../CSS/Makeup.css'

const MakeupHero = () => {
  return (
    <div>
    <div className='body'>
        <div className="bg-image"></div>
        <div className="bg-text">
            <img className='imgblour' src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="" />
        </div>
    </div>
    <div className='upper'>
        <p>Home</p>
        
        <i id='righta' className="fa-solid fa-angle-right"></i>
        <p>Makeup</p>
      </div>

    
    </div>
  )
}

export default MakeupHero
