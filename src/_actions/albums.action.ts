import { Dispatch } from 'redux'
import AlbumsActionTypes, { AlbumsActionTypeKeys } from "./albums.actionTypes";

const apiUrl = 'https://jsonplaceholder.typicode.com'
const getHeader = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}

function getAlbums(): (dispatch: Dispatch<AlbumsActionTypes>) => void {
    return (dispatch: Dispatch<AlbumsActionTypes>) => {
        dispatch(request());
        fetch(`${apiUrl}/albums`, getHeader)
            .then(req => req.json())
            .then(albums => {
                dispatch(success(albums))
            })
            .catch(error => dispatch(failure(error)))

    };
    function request(): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_ALBUMS_REQUEST } }
    function success(albums: Array<any>): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_ALBUMS_SUCCESS, albums: albums } }
    function failure(error: string): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_ALBUMS_FAILURE, error } }
}

function getPhotos(albumId: number): (dispatch: Dispatch<AlbumsActionTypes>) => void {
    return (dispatch: Dispatch<AlbumsActionTypes>) => {
        dispatch(request(albumId))
        fetch(`${apiUrl}/photos?albumId=${albumId}`, getHeader)
            .then(req => req.json())
            .then(photos => {
                dispatch(success(photos))
            })
            .catch(error => dispatch(failure(error)))

    }
    function request(albumId: number): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_PHOTOS_REQUEST, albumId: albumId } }
    function success(photos: Array<any>): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_PHOTOS_SUCCESS, photos: photos } }
    function failure(error: string): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.GET_PHOTOS_FAILURE, error } }
}

function uploadPhoto(desription: string, photo: File): (dispatch: Dispatch<AlbumsActionTypes>) => void {
    return (dispatch: Dispatch<AlbumsActionTypes>) => {
        const postHeader = (data: any) => ({
            method: 'POST',
            body: JSON.stringify({
                img: data,
                title: desription
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        var formData = new FormData();
        formData.append("fileToUpload", photo);
        dispatch(request())
        fetch(`${apiUrl}/photos`, postHeader(formData))
            .then(req => {
                if (req.ok) {
                    dispatch(success())
                }
            })
            .catch(error => dispatch(failure(error)))

        function request(): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.POST_PHOTO_REQUEST } }
        function success(): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.POST_PHOTO_SUCCESS } }
        function failure(error: string): AlbumsActionTypes { return { type: AlbumsActionTypeKeys.POST_PHOTO_FAILURE, error } }
    }
}

function uploaded(): (dispatch: Dispatch<AlbumsActionTypes>) => void {
    return (dispatch: Dispatch<AlbumsActionTypes>) => {
        dispatch({
            type: AlbumsActionTypeKeys.UPLOADED_PHOTO
        })
    }

}

export const albumsActions = {
    getAlbums,
    getPhotos,
    uploadPhoto,
    uploaded
}