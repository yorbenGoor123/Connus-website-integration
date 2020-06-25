import React from 'react';

import {
    Header, 
    Row,
} from '../partials';

const RouteLayout = ({ children }) => {
    return (
        <div className="App">
            <Header>
                <Row>
                    
                </Row>
            </Header>

            {/** Content here */ }
            { children }

            {/** Footer here */}
        </div>
    )
};

export default RouteLayout;