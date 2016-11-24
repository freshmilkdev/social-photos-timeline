import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {vkParams} from '../../config-auth/config';
class AuthContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    authorizeVK() {
        window.location = `https://oauth.vk.com/authorize?client_id=${vkParams.client_id}&redirect_uri=${vkParams.redirect_uri}&scope=${vkParams.scope}&response_type=${vkParams.response_type}`;
    }
    render() {
        return (
            <div>Yo</div>
        );
    }
}

AuthContainer.propTypes = {
    //myProp: PropTypes.string.isRequired 
};

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);