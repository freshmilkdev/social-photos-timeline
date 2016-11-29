import React, {PropTypes} from 'react';

const PhotosList = ({photos}) => {

    return (<div id="photosGrid">
        {
            photos.map((photo, key)=> {
                return (<img src={photo.src_big} key={key}/> );
            })
        }
    </div>);
};

PhotosList.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotosList;