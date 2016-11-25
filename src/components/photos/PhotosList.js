import React, {PropTypes} from 'react';

const PhotosList = ({photos}) => {

    return (<div>
        {
            photos.map((photo, key)=> {
                return (<img src={photo.src} key={key}/> );
            })
        }
    </div>);
};

PhotosList.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotosList;