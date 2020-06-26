import React from 'react';

import { Container } from '../Layout';

const Header = ({ children }) => {
    return (
        <div className="header">
            <Container>
                { children }
            </Container>
        </div>
    )
};

export default Header;