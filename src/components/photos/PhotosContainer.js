import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TimeLine from './TimeLine';
import {getUniqueYears} from '../../selectors';
class PhotosContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <TimeLine years={this.props.years}/>
            </div>
        );
    }
}

PhotosContainer.propTypes = {
    photos: PropTypes.array.isRequired,
    years: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let {photos} = state;
    let years = [];

    if(photos.length > 1){
        photos.shift(); //0 element always contains total photos count
        years = getUniqueYears(photos);
    }
    return {
        photos: photos || [],
        years: years
    };
};

export default connect(mapStateToProps)(PhotosContainer);
