import * as actionType from '../utils/ActionType';
import * as RestCall from '../utils/RestCalls';

export function userAuthentication(user) {

    let isUserValid = false;
    let erroMessage = '';

    return function (dispatch) {

        dispatch(request(user));
        //const res = dispatch(RestCall.callToRestApi);

        //if (res.status === RestCall.STATUS_OK) {
            //isUserValid = true
       // }

        if (true) {
            dispatch(success())
            this.history.push('/home');//write router path
        } else {
            dispatch(failure())
        }

    };
    function request(user) {
        return {
            type: actionType.USER_REQUEST,
            payload: user
        }
    }

    function success() {
        return {
            type: actionType.USER_SUCESS,
            payload: true
        }
    }

    function failure() {
        return {
            type: actionType.USER_FAILURE,
            payload: false,
            errorMessage: erroMessage
        }
    }

}

