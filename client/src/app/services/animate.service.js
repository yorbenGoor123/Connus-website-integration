import React, { createContext, useContext } from 'react';

const AnimateContext = createContext();
const useAnimation = () => useContext(AnimateContext);

const AnimateProvider = ({children}) => {
    const ToggleMenu = (action) => {

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
