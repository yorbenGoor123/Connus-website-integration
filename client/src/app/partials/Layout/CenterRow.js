import React from 'react';

const CenterRow = ({ children }) => {
    return (
        <div className="row d-flex justify-content-center">
            { children }
        </div>
    )
};

export default CenterRow;