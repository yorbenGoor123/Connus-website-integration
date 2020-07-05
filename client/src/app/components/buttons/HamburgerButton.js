import React from 'react';

const HamburgerButton = ({click}) => {
    return (
        <div className="hamburger-button d-md-none d-block" onClick={() => click(true)}>
            <div className="hamburger-button__first"></div>
            <div className="d-flex justify-content-end">
                <div className="hamburger-button__second"></div>
            </div>
        </div>
    )
};

export default HamburgerButton;