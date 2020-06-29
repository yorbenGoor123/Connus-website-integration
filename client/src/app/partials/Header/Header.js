import React, { useEffect } from 'react';

import { Container } from '../Layout';

const Header = ({ children }) => {
    useEffect(() => {
        window.onscroll = () => {
            headerdisplay();
        };

        const headerdisplay = () => {
            const headerstyle = document.getElementsByClassName('header')[0];
   
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                headerstyle.classList.add("header-scrolled");
            } else {
                headerstyle.classList.remove("header-scrolled");
            }
        };
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