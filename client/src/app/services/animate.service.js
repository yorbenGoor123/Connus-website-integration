import React, { createContext, useContext } from 'react';

const AnimateContext = createContext();
const useAnimation = () => useContext(AnimateContext);

const AnimateProvider = ({children}) => {
    const ToggleMenu = (btn, option) => {
        option.style.display = 'block';
        option.style.opacity = '1';
    };

    return (
        <AnimateContext.Provider value={{
            ToggleMenu,
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
