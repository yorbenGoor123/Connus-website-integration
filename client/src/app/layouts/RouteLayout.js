import React from 'react';

const RouteLayout = ({ children }) => {
    return (
        <div className="App">
            {/** Header here */ }

            {/** Content here */ }
            { children }

            {/** Footer here */}
        </div>
    )
};

export default RouteLayout;