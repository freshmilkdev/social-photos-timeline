import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function photosReducer(state = initialState.photos, action) {

    switch (action.type) {
        case types.LOAD_ALL_PHOTOS_SUCCESS:
            return action.photos;
        default:
            return state;
    }
}


