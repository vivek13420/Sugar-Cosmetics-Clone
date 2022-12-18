
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import MakeupHero from './Pages/MakeupHero';
import ToastExample from './Components/Toast';
import {Toaster} from 'react-hot-toast'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    
    <Toaster/>
    <Footer/>
    </div>
  );
}

export default App;
