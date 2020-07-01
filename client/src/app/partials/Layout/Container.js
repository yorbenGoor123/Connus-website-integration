import React from 'react';

const Container = ({ children, section }) => {
    return (
        section ? (
            <div className={`container ${section}`}>
                { children }
            </div>
        ) : (
            <div className="container">
                { children }
            </div>
        )
    )
};

export default Container;