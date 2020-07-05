import React from 'react';

const Text = ({text, color, extraClasses}) => {
    return (
        <div className={`text ${color ?? ''} ${extraClasses ?? ''}`}>
            <p >
                { text }
            </p>
        </div>
    )
};

export default Text;