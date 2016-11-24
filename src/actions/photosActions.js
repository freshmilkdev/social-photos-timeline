import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import jsonp from 'jsonp';
import {NotificationManager} from 'react-notifications';

export const loadAllPhotosSuccess = (photos) => {
    return {type: types.LOAD_ALL_PHOTOS_SUCCESS, photos};
};

/*Thunks*/
export const loadAllPhotos = (user) => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        const url = `https://api.vk.com/method/photos.getAll?extended=1&owner_id=${user.user_id}&access_token=${user.access_token}`;
        jsonp(url, null, (err = {}, data) => {
            if (data.error) {
                dispatch(ajaxCallError());
                NotificationManager.error(data.error, 'Error');
                return;
            }
            dispatch(loadAllPhotosSuccess(data.response));
        });
    };
};

