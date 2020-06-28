import React from 'react';

const SmallTitle = ({text, center}) => {
    return (
        center ? (
            <h2 className="small-title text-center">{text}</h2>
        ) : (
            <h2 className="small-title">{text}</h2>
        )
    )
};

export default SmallTitle;