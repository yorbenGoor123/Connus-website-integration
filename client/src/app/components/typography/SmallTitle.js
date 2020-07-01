import React from 'react';

const SmallTitle = ({text, center, color}) => {
    return (
        center ? (
            <h2 className={`small-title text-center ${color}`}>{text}</h2>
        ) : (
            <h2 className={`small-title ${color}`}>{text}</h2>
        )
    )
};

export default SmallTitle;