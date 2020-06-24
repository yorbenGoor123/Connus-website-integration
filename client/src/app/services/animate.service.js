import React, { createContext, useContext } from 'react';

const AnimateContext = createContext();
const useAnimation = () => useContext(AnimateContext);

const AnimateProvider = ({children}) => {
    /** 
     * 
     * 
     * Insert all functions here 
     * 
     * 
     * */


    return (
        <AnimateContext.Provider value={{
            /** 
             * 
             * 
             * 
             * Here comes the animations 
             * 
             * 
             * 
             * */
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
