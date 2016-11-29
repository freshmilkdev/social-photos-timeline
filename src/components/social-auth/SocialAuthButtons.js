import React, {PropTypes} from 'react';

const SocialAuthButtons = ({authorizeVK}) => {

    return (<div className="socialButtonsWrapper">
        <div className="icon-vkontakte socialButton raised" onClick={authorizeVK} />
    </div>);
};

SocialAuthButtons.propTypes = {
    authorizeVK: PropTypes.func.isRequired
};

export default SocialAuthButtons;