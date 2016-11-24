import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {

    switch (action.type) {
        case types.SET_AUTH_USER:
            return action.data;
        default:
            return state;
    }
}


