import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import MakeupCard from './MakeupCard';
import "../CSS/MakeupCard.css";
import { NavLink } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import {getMakeup} from '../Redux/AppReducer/action'
import { toast } from 'react-hot-toast';
const Makeuplist = () => {

    const addTocartHandler = (options) => { 
 
        toast.success("Added to car")
      }

    const makeup = useSelector((store)=> store.books);
    const dispatch = useDispatch();
    const location = useLocation()

    const [searchParams] = useSearchParams()

    useEffect(()=>{
        if(location || makeup.length ===0){
            const getBookParams ={
                params: {
                    category: searchParams.getAll('category')   
                }
            }
            dispatch(getMakeup(getBookParams))
        }
    }, [makeup.length, dispatch, location.search])   

  return <div className='mkdiv'>
        {makeup.length> 0 && makeup.map(singleMakeup =>{
            return (
                
                <div key={singleMakeup.id}
                >
                <MakeupCard makeupData = {singleMakeup}
                    handler = {addTocartHandler}
                />
                </div>  
                 
        )})}
       
    </div>
    
    
  
}

export default Makeuplist