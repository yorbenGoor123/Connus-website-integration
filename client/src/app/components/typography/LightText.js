import React from 'react';

const LightText = ({text, center}) => {
    return (
        center ? (
            <p className="light-text text-center">{text}</p>
        ) : (
            <p className="light-text">{text}</p>
        )
    )
};

export default LightText;