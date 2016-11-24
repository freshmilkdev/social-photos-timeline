import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
export function setAuthUserSuccess(data) {
    return {type: types.SET_AUTH_USER, data};
}