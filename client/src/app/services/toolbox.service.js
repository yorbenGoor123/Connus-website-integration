import React, { createContext, useContext } from 'react';

import text from '../textContent';

const ToolboxContext = createContext();
const useToolbox = () => useContext(ToolboxContext);

const ToolboxProvider = ({children}) => {
	/**
	 * @param cookieName key of the cookei you want to retrieve
	 * @returns an object with the cookies as key value pairs
	 **/ 
	const getCookie = (cookieName) => {
		// get cookies and process the string
		const cookieString = document.cookie;
		const cookieArray = cookieString.split(';');
		const cookies = {}
		cookieArray.forEach( (cookie) => {
			const parts = cookie.split('=');
			if ( parts[0] && parts[1] ) cookies[parts[0].trim()] = parts[1].trim();
		})

		return cookies[cookieName];
	};

	return (
		<ToolboxContext.Provider value={{
			getCookie
		}}>
			{children}
		</ToolboxContext.Provider>
	)
};

export {
	ToolboxContext,
	useToolbox,
	ToolboxProvider,
};
