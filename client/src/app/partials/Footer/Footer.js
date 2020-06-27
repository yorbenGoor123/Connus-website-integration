import React from 'react';

import { Container } from '../Layout';

const Footer = ({ children }) => {
    return (
        <div className="footer">
            <Container>
                { children }
            </Container>
        </div>
    )
};

export default Footer;