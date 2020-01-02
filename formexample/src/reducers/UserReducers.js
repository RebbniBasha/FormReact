import * as actionType from '../utils/ActionType';
//import { combineReducers } from 'redux';

const intialState = {
    user: {
        profile: "",
        userName: "",
        pwd: "",
        isUserValid:'',
        errorMessage :''
    }
}

function userReducer (state = intialState, action) {

    switch (action.type) {
    case actionType.USER_REQUEST:
      return {
          user: action.payload    
        }
    case actionType.USER_SUCESS:
    return {
        user:{
            isUserValid:action.payload
        }
        
    };
    case actionType.USER_FAILURE:
    return {
        user :{
            isUserValid:action.payload,
            errorMessage :action.errorMessage
        }
       
    };
    default:
      return state
  }
}

export default userReducer