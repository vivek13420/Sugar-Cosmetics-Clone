import * as types from './actionType'
import axios from 'axios'
const getMakeupRequest = () =>{
    return {
        type: types.GET_MAKEUP_REQUEST
    }
}

const getMakeupSuccess = (payload) =>{
    return {
        type: types.GET_MAKEUP_SUCCESS,
        payload
    }
}

const getMakeupError = () =>{
    return {
        type: types.GET_MAKEUP_ERROR
    }
}

const getMakeup = (params) =>(dispatch) =>{
    dispatch(getMakeupRequest());
    return axios 
        .get('https://nordstrom1.onrender.com/api/sugarcan',params)
        .then((r)=>{
            dispatch(getMakeupSuccess(r.data));
            // console.log(r.data)
        })
        .catch((e)=>{
            dispatch(getMakeupError());
        })
}
export {getMakeup};