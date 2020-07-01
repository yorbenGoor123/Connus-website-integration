import React from 'react';

const Text = ({text, color, extraClasses}) => {
    return (
        <p className={`text ${color ?? ''} ${extraClasses ?? ''}`}>
            { text }
        </p>
    )
};

export default Text;