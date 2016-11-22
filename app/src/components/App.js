import React, {PropTypes} from 'react';
import queryString from 'query-string';
import PhotosContainer from './photos/PhotosContainer';
import jsonp from 'jsonp';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            params: {},
            photos: []
        };

        let params = queryString.parse(location.hash);
        if (params.access_token) {
            let url = `https://api.vk.com/method/photos.getAll?extended=1&owner_id=${params.user_id}&access_token=${params.access_token}`;
            jsonp(url, null, (err, data) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
                this.setState({photos: data.response, params});
            });
        }

    }

    authorizeVK() {
        let params = {
            client_id: 5741592,
            redirect_uri: window.location.href,
            scope: 'photos',
            response_type: 'token'
        };
        window.location = `https://oauth.vk.com/authorize?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&response_type=${params.response_type}`;
    }

    render() {
        return (
            <div>
                {
                    this.state.params.access_token ?
                        <PhotosContainer photos={this.state.photos} /> :
                        <div onClick={this.authorizeVK}>VK</div>
                }
            </div>
        );
    }
}

App.propTypes = {};

export default App;
