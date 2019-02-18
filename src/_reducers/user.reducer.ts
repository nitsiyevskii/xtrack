import UserActionTypes, { UserActionTypeKeys } from "../_actions/user.actionTypes";

const initialState: {} = {
    username: '',
    signin: false,
    error: null
}
export function user(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case UserActionTypeKeys.USER_REGISTER_REQUEST:
        case UserActionTypeKeys.USER_LOGIN_REQUEST:
            return state
        case UserActionTypeKeys.USER_REGISTER_SUCCESS:
        case UserActionTypeKeys.USER_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.username,
                signin: action.signin
            }
        case UserActionTypeKeys.USER_LOGIN_FAILURE:
        case UserActionTypeKeys.USER_LOGIN_FAILURE:
            return {
                username: '',
                signin: false,
                error: action.error
            }
        case UserActionTypeKeys.USER_LOGOUT:
            return {
                username: '',
                signin: false,
                error: null
            }
        default:
            return state
    }

}