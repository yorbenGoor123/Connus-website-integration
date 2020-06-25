import React from 'react';

import { Container } from '../Layout';

const Header = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
};

export default Header;