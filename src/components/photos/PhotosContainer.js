import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TimeLine from './TimeLine';
import PhotosGrid from './PhotosGrid';
import {getUniqueYears, getPhotosByYear} from '../../selectors';
class PhotosContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            photosByYear: [],
            activeYear: 0
        };
        this.setPhotosByYear = this.setPhotosByYear.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.photos.length && nextProps.years.length && !this.state.photosByYear.length) {
            this.setState({
                photosByYear: getPhotosByYear(nextProps.photos, nextProps.years[0]),
                activeYear: nextProps.years[0]
            });
        }
    }

    setPhotosByYear(year) {
        let {photos} = this.props;
        if (photos.length) {
            this.setState({
                photosByYear: getPhotosByYear(photos, year),
                activeYear: year
            });
        }
    }

    render() {
        return (
            <div>
                <TimeLine
                    years={this.props.years}
                    activeYear={this.state.activeYear}
                    setPhotosByYear={this.setPhotosByYear}
                />
                <PhotosGrid photos={this.state.photosByYear}/>
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
