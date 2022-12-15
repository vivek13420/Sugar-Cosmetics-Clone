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
        .get('http://localhost:8080/books',params)
        .then((r)=>{
            dispatch(getMakeupSuccess(r.data));
        })
        .catch((e)=>{
            dispatch(getMakeupError());
        })
}
export {getMakeup};