import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TimeLine from './TimeLine';
import PhotosList from './PhotosList';
import {getUniqueYears, getPhotosByYear} from '../../selectors';
class PhotosContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            photosByYear: []
        };
        this.setPhotosByYear = this.setPhotosByYear.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.photos.length && nextProps.years.length && !this.state.photosByYear.length) {
            this.setState({
                photosByYear: getPhotosByYear(nextProps.photos, nextProps.years[0])
            });
        }
    }

    setPhotosByYear(year) {
        let {photos} = this.props;
        if (photos.length) {
            this.setState({photosByYear: getPhotosByYear(photos, year)});
        }
    }

    render() {
        return (
            <div>
                <TimeLine years={this.props.years} setPhotosByYear={this.setPhotosByYear}/>
                <PhotosList photos={this.state.photosByYear}/>
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

    if (photos.length > 1) {
        photos.shift(); //0 element always contains total photos count
        years = getUniqueYears(photos);
    }
    return {
        photos: photos || [],
        years: years
    };
};

export default connect(mapStateToProps)(PhotosContainer);
