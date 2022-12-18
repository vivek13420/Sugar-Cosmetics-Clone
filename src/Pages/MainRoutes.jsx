import React from 'react'
import { Route, Routes } from "react-router-dom";

import Makeup from './Makeup';
import SinglePage from './SinglePage';
import Cart from './Cart';
import Home from './Home';
import Payment from './Payment';
import Skincare from './Skincare';
import Pay from '../Components/Payment/Pay';
import Signup from '../Auth/Signup/Signup';
import Login from '../Auth/Login/Login';
const MainRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Home/>} />;
      <Route path="/payment" element= {<Pay/>}/>
      <Route path='/makeup' element={<Makeup/>}/>
      <Route path='/details' element={<Payment/>}/>
      <Route path='/skincare' element={<Skincare/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path= "/cart" element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/sugarcan/:id" element={<SinglePage />} />
      
      <Route path="*" element={<div>Page Not Found</div>} />
      
    </Routes>
  )
}

export default MainRoutes
