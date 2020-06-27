import React, { createContext, useContext } from 'react';

const AnimateContext = createContext();
const useAnimation = () => useContext(AnimateContext);

const AnimateProvider = ({children}) => {
    const ToggleMenu = (btn, option, arrow) => {
        option.style.display = 'block';
        option.style.opacity = '1';

        arrow.style.transform = "rotate(180deg)";
    };

    const HideMenu = (btn, option, arrow) => {
        option.style.display = 'none';
        option.style.opacity = '0';

        arrow.style.transform = "rotate(0deg)";
    };

    return (
        <AnimateContext.Provider value={{
            ToggleMenu,
            HideMenu,
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
