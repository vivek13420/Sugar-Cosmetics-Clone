import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Makeup from './Makeup';
import SinglePage from './SinglePage';
import Cart from './Cart';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Makeup />} />;
      <Route path="/login" element={<Login />} />
      <Route path= "/cart" element={<Cart/>}/>
      <Route path="/sugarcan/:id" element={<SinglePage />} />
    
      <Route path="*" element={<div>Page Not Found</div>} />
      
    </Routes>
  )
}

export default MainRoutes
