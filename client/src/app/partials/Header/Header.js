import React, { useEffect } from 'react';

import { Container } from '../Layout';
import { useAnimation } from '../../services';

const Header = ({ children }) => {
    const { startHomeAnimation } = useAnimation();
    
    useEffect(() => {
        startHomeAnimation();
    });

    return (
        <div className="header">
            <Container>
                { children }
            </Container>
        </div>
    )
};

export default Header;