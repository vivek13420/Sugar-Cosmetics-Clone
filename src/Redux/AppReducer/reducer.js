import * as types from './actionType';

const initalState ={
    books:[],
    books1:[],
    isLoading:false,
    isError: false
}
const reducer = (oldState= initalState,action)=>{
    const {type, payload} = action;
    switch (type){
        case types.GET_MAKEUP_REQUEST:
            return {...oldState, isLoading:true};
        case types.GET_MAKEUP_SUCCESS:
            return {...oldState, isLoading:false, books:payload}
        case types.GET_MAKEUP_ERROR:
            return {...oldState, isLoading:false, isError:true};
        case types.GET_SKINCARE_REQUEST:
            return {...oldState, isLoading:true};
        case types.GET_SKINCARE_SUCCESS:
            return {...oldState, isLoading:false, books1:payload}
        case types.GET_SKINCARE_ERROR:
            return {...oldState, isLoading:false, isError:true};  
           
            default:
                return oldState;
        }
}
export {reducer}