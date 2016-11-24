import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.checkAuth(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.checkAuth(nextProps);
    }

    checkAuth(props) {
        if (!props.user && !props.location.includes('auth')) {
            this.context.router.push('auth');
        }
    }

    /*checkToken(token) {
     return sendRequest(`https://api.vk.com/method/secure.checkToken?${token}`);
     }*/

    render() {
        return (
            <div>
                {this.props.children}
                <NotificationContainer/>
            </div>
        );
    }
}

App.contextTypes = {
    router: PropTypes.object
};

App.propTypes = {
    children: PropTypes.object,
    user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {

    return {
        user: state.user,
        location: ownProps.location.pathname
    };
};
export default connect(mapStateToProps)(App);