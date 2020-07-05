import React from 'react';

import {
    Header, 
    Footer,
} from '../partials';

const PlainLayout = ({ children }) => {
    return (
        <div className="App">
            <Header />

            { children }

            <Footer/>
        </div>
    )
};

export default PlainLayout;