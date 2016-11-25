import React, {PropTypes} from 'react';

const TimeLine = ({years, activeYear, setPhotosByYear}) => {
    let width = Math.floor(100 / years.length);
    return (<div className="timeLine">
        {
            years.map((year, key)=> {
                let className = `bulletOuter ${year == activeYear ? 'active' : ''}`;
                return (<div
                    onClick={()=> {
                        setPhotosByYear(year);
                    }}
                    key={key}
                    className={className}
                    style={{width: `${width}%`}}>
                    <div className="bulletInner"/>
                </div>);
            })
        }
    </div>);
};

TimeLine.propTypes = {
    years: PropTypes.array.isRequired,
    setPhotosByYear: PropTypes.func.isRequired,
    activeYear: PropTypes.number.isRequired
};

export default TimeLine;