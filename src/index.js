import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import routes from './routes';
import configStore from './store/config';
import queryString from 'query-string';
import {Provider} from 'react-redux';
import {setAuthUserSuccess} from './actions/userActions';
import {loadAllPhotos} from './actions/photosActions';
import 'react-notifications/lib/notifications.css';
import './styles/style.css';

const store = configStore();

const params = queryString.parse(location.hash);
if(params.access_token){
    store.dispatch(setAuthUserSuccess(params));
    store.dispatch(loadAllPhotos(params));
    //hashHistory.push('/');
}

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);