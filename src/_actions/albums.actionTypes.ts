export enum AlbumsActionTypeKeys {
    GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST',
    GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS',
    GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE',

    GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST',
    GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS',
    GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE',

    POST_PHOTO_REQUEST = 'POST_PHOTOS_REQUEST',
    POST_PHOTO_SUCCESS = 'POST_PHOTOS_SUCCESS',
    POST_PHOTO_FAILURE = 'POST_PHOTOS_FAILURE',

    UPLOADED_PHOTO = 'UPLOADED_PHOTO'
}
interface IAlbumsGetActionRequest {
    readonly type: AlbumsActionTypeKeys.GET_ALBUMS_REQUEST
}
interface IAlbumsGetActionSuccess {
    readonly type: AlbumsActionTypeKeys.GET_ALBUMS_SUCCESS
    readonly albums: Array<any>

}
interface IAlbumsGetActionFailure {
    readonly type: AlbumsActionTypeKeys.GET_ALBUMS_FAILURE
    readonly error: string
}
interface IPhotosGetActionRequest {
    readonly type: AlbumsActionTypeKeys.GET_PHOTOS_REQUEST
    readonly albumId: number
}
interface IPhotosGetActionSuccess {
    readonly type: AlbumsActionTypeKeys.GET_PHOTOS_SUCCESS
    readonly photos: Array<any>

}
interface IPhotosGetActionFailure {
    readonly type: AlbumsActionTypeKeys.GET_PHOTOS_FAILURE
    readonly error: string
}

interface IPhotoPostActionRequest {
    readonly type: AlbumsActionTypeKeys.POST_PHOTO_REQUEST
}
interface IPhotoPostActionSuccess {
    readonly type: AlbumsActionTypeKeys.POST_PHOTO_SUCCESS

}
interface IPhotoPostActionFailure {
    readonly type: AlbumsActionTypeKeys.POST_PHOTO_FAILURE
    readonly error: string
}

interface IPhotoUploadedAction {
    readonly type: AlbumsActionTypeKeys.UPLOADED_PHOTO
}

type AlbumsActionTypes =
    | IAlbumsGetActionRequest
    | IAlbumsGetActionSuccess
    | IAlbumsGetActionFailure
    | IPhotosGetActionRequest
    | IPhotosGetActionSuccess
    | IPhotosGetActionFailure
    | IPhotoPostActionRequest
    | IPhotoPostActionSuccess
    | IPhotoPostActionFailure
    | IPhotoUploadedAction

export default AlbumsActionTypes;