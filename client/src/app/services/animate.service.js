import React, { createContext, useContext } from 'react';

const AnimateContext = createContext();
const useAnimation = () => useContext(AnimateContext);

const AnimateProvider = ({children}) => {
    const startHomeAnimation = () => {
        window.onscroll = () => {
            animateHeader();
        }; 
    };

    const ToggleMenu = (option, arrow) => {
        option.style.display = 'block';
        option.style.opacity = '1';

        arrow.style.transform = "rotate(180deg)";
    };

    const HideMenu = (option, arrow) => {
        option.style.display = 'none';
        option.style.opacity = '0';

        arrow.style.transform = "rotate(0deg)";
    };

    const animateHeader = () => {
        const headerstyle = document.getElementsByClassName('header')[0];
   
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerstyle.classList.add("header-scrolled");
        } else {
            headerstyle.classList.remove("header-scrolled");
        }
    };

    const checkElement = (el) => {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
    
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    };

    return (
        <AnimateContext.Provider value={{
            ToggleMenu,
            HideMenu,
            checkElement,
            startHomeAnimation,
        }}>
            {children}
        </AnimateContext.Provider>
    )
};

export {
    AnimateContext,
    AnimateProvider,
    useAnimation,
}
