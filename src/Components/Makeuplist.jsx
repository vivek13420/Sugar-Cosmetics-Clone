import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import MakeupCard from './MakeupCard';
import "../CSS/MakeupCard.css"
import { useLocation, useSearchParams } from 'react-router-dom';
import {getMakeup} from '../Redux/AppReducer/action'
const Makeuplist = () => {
    const makeup = useSelector((store)=> store.books);
    const dispatch = useDispatch();
    const location = useLocation()
    console.log(location)
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
            return <div key={singleMakeup.id}> <MakeupCard makeupData = {singleMakeup}/></div>
        })}
        
    </div>
  
}

export default Makeuplist