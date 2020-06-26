import React from 'react';

const Col = ({ children, sizes }) => {
    return (
        <div className={sizes}>
            { children }
        </div>
    )
};

export default Col;