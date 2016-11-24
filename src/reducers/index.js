import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import user from './userReducer';
import photos from './photosReducer';
export default combineReducers({
    user,
    ajaxCallsInProgress,
    photos
});
