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
const getSkincareRequest = () =>{
    return {
        type: types.GET_SKINCARE_REQUEST
    }
}

const getSkincareSuccess = (payload) =>{
    return {
        type: types.GET_SKINCARE_SUCCESS,
        payload
    }
}

const getSkincareError = () =>{
    return {
        type: types.GET_SKINCARE_ERROR
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
const getSkincare = (params) =>(dispatch) =>{
    dispatch(getSkincareRequest());
    return axios 
        .get('https://wild-erin-bluefish-hose.cyclic.app/sugarcan',params)
        .then((r)=>{
            dispatch(getSkincareSuccess(r.data));
        })
        .catch((e)=>{
            dispatch(getSkincareError());
        })
}
export {getMakeup,getSkincare};