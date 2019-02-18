import AlbumsActionTypes, { AlbumsActionTypeKeys } from "../_actions/albums.actionTypes";
const initialState: {} = {
    albums: [],
    photos: [],
    error: null,
    photoUploaded: false
}
export function albums(state = initialState, action: AlbumsActionTypes) {
    switch (action.type) {

        case AlbumsActionTypeKeys.GET_ALBUMS_REQUEST:
        case AlbumsActionTypeKeys.POST_PHOTO_REQUEST:
        case AlbumsActionTypeKeys.GET_PHOTOS_REQUEST:
            return state
        case AlbumsActionTypeKeys.GET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.albums
            }
        case AlbumsActionTypeKeys.GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.photos
            }
        case AlbumsActionTypeKeys.POST_PHOTO_SUCCESS:
            return {
                ...state,
                photoUploaded: true
            }
        case AlbumsActionTypeKeys.GET_ALBUMS_FAILURE:
            return {
                ...state,
                albums: [],
                error: action.error
            }
        case AlbumsActionTypeKeys.GET_PHOTOS_FAILURE:
            return {
                ...state,
                photos: [],
                error: action.error
            }
        case AlbumsActionTypeKeys.POST_PHOTO_FAILURE:
            return {
                ...state,
                photoUploaded: false,
                error: action.error
            }
        case AlbumsActionTypeKeys.UPLOADED_PHOTO:
            return {
                ...state,
                photoUploaded: false
            }
        default:
            return state
    }

}