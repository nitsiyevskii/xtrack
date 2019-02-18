import { Dispatch } from 'redux'
import UserActionTypes, { UserActionTypeKeys } from "./user.actionTypes";

const apiUrl = 'https://jsonplaceholder.typicode.com'
const getHeader = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}

function login(username: string): (dispatch: Dispatch<UserActionTypes>) => void {
    return (dispatch: Dispatch<UserActionTypes>) => {
        dispatch(request());
        fetch(`${apiUrl}/users?username=${username}`, getHeader)
            .then(req => req.json())
            .then(user => {
                if (user.length) {
                    dispatch(success(user[0].username))
                } else {
                    dispatch(failure("User doesn't exist"))
                }
            })
            .catch(error => dispatch(failure(error)))

    };
    function request(): UserActionTypes { return { type: UserActionTypeKeys.USER_LOGIN_REQUEST } }
    function success(username: string): UserActionTypes {
        return {
            type: UserActionTypeKeys.USER_LOGIN_SUCCESS,
            username: username,
            signin: true
        }
    }
    function failure(error: string): UserActionTypes { return { type: UserActionTypeKeys.USER_LOGIN_FAILURE, error } }
}

function register(username: string): (dispatch: Dispatch<UserActionTypes>) => void {
    return (dispatch: Dispatch<UserActionTypes>) => {
        const postHeader = {
            method: 'POST',
            body: JSON.stringify({
                username: username
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
        dispatch(request());
        fetch(`${apiUrl}/users`, postHeader)
            .then(req => req.json())
            .then(user => {
                dispatch(success(user.username))
            })
            .catch(error => dispatch(failure(error)))

    };
    function request(): UserActionTypes { return { type: UserActionTypeKeys.USER_REGISTER_REQUEST } }
    function success(username: string): UserActionTypes {
        return {
            type: UserActionTypeKeys.USER_REGISTER_SUCCESS,
            username: username,
            signin: true
        }
    }
    function failure(error: string): UserActionTypes { return { type: UserActionTypeKeys.USER_REGISTER_FAILURE, error } }
}

function logout(): (dispatch: Dispatch<UserActionTypes>) => void {
    return (dispatch: Dispatch<UserActionTypes>) => dispatch({ type: UserActionTypeKeys.USER_LOGOUT })
}

export const userActions = {
    login,
    register,
    logout
}