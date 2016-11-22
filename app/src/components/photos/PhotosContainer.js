import React, {PropTypes} from 'react';
import TimeLine from './TimeLine';
class PhotosContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            photos: [],
            years: []
        };

    }

    componentWillReceiveProps(nextProps) {
        let {photos} = nextProps;
        photos.shift();
        this.setState({photos, years: this.getUniqueYears(photos)});
    }

    getUniqueYears(photos) {
        return [...new Set(photos.map(photo => new Date(photo.created * 1000).getFullYear()))];
    }

    render() {
        return (
            <TimeLine years={this.state.years}/>
        );
    }
}

PhotosContainer.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotosContainer;