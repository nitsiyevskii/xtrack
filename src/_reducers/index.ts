import { albums } from './albums.reducer'
import { user } from './user.reducer'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
    albums,
    user
})