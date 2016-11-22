import React, {PropTypes} from 'react';

const TimeLine = ({years}) => {
    let width = Math.floor(100 / years.length);
    return (<div className="timeLine">
        {
            years.map((year, key)=> {
                return (<div key={key} className="bulletOuter" style={{width: `${width}%`}}>
                    <div className="bulletInner" />
                </div>);
            })
        }
    </div>);
};

TimeLine.propTypes = {
    years: PropTypes.array.isRequired
};

export default TimeLine;