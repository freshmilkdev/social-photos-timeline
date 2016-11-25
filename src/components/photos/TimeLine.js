import React, {PropTypes} from 'react';

const TimeLine = ({years, setPhotosByYear}) => {
    let width = Math.floor(100 / years.length);
    return (<div className="timeLine">
        {
            years.map((year, key)=> {
                return (<div
                    onClick={()=>{setPhotosByYear(year);}}
                    key={key}
                    className="bulletOuter"
                    style={{width: `${width}%`}}>
                    <div className="bulletInner"/>
                </div>);
            })
        }
    </div>);
};

TimeLine.propTypes = {
    years: PropTypes.array.isRequired,
    setPhotosByYear: PropTypes.func.isRequired
};

export default TimeLine;