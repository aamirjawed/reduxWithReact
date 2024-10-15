
import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

const initialState = {
    user:{
        loading:false,
        users:[],
        error:''
    }
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                error:action.payload
            }

        default: return state
        
    }
}