import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import App from './components/App';
import SocialAuthContainer from './components/social-auth/SocialAuthContainer';
import PhotosContainer from './components/photos/PhotosContainer';
import PageNotFound from './components/common/PageNotFound';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PhotosContainer}/>
        <Route path="auth" component={SocialAuthContainer} />
        <Route path="photos" component={PhotosContainer} />
        <Route path="*" component={PageNotFound}/>
    </Route>
);