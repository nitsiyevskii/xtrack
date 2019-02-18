export enum UserActionTypeKeys {
    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE',

    USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
    USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE',

    USER_LOGOUT = 'USER_LOGOUT'
}
interface IUserLoginActionRequest {
    readonly type: UserActionTypeKeys.USER_LOGIN_REQUEST
}
interface IUserLoginActionSuccess {
    readonly type: UserActionTypeKeys.USER_LOGIN_SUCCESS
    readonly username: string
    readonly signin: boolean

}
interface IUserLoginActionFailure {
    readonly type: UserActionTypeKeys.USER_LOGIN_FAILURE
    readonly error: string
}
interface IUserRegisterActionRequest {
    readonly type: UserActionTypeKeys.USER_REGISTER_REQUEST
}
interface IUserRegisterActionSuccess {
    readonly type: UserActionTypeKeys.USER_REGISTER_SUCCESS
    readonly username: string
    readonly signin: boolean
}
interface IUserRegisterActionFailure {
    readonly type: UserActionTypeKeys.USER_REGISTER_FAILURE
    readonly error: string
}
interface IUserLogoutAction {
    readonly type: UserActionTypeKeys.USER_LOGOUT
}

type UserActionTypes =
    | IUserLoginActionRequest
    | IUserLoginActionSuccess
    | IUserLoginActionFailure
    | IUserRegisterActionRequest
    | IUserRegisterActionSuccess
    | IUserRegisterActionFailure
    | IUserLogoutAction

export default UserActionTypes;