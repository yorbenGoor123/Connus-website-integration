import React from 'react';

const Text = ({text, color}) => {
    return (
        <p className={`text ${color}`}>
            { text }
        </p>
    )
};

export default Text;