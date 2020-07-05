import React from 'react';

import {
    Header, 
    Footer,
} from '../partials';

const RouteLayout = ({ children }) => {
    return (
        <div className="App">
            <Header />

            { children }

            <Footer/>
        </div>
    )
};

export default RouteLayout;