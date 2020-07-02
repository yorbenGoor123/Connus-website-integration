import React, { createContext, useContext } from 'react';

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

	/**
	* @param prefLang which language you want to retrieve
	**/ 
	const setLanguage = (prefLang) => {
		const language = `language=${prefLang};`;
		document.cookie = language;
	};

	/**
	* @param prefPage which page you want to retrieve
	**/ 
	const setPage = (prefPage) => {
		const page = `preferedPage=${prefPage};`;
		document.cookie = page;
	}; 

	/**
	 * Setting a default cookie when no cookie has been set
	 **/
	const setDefaultCookie = () => {
		const language = 'language=en;';
		document.cookie = language;

		const page = 'preferedPage=influencer;';
		document.cookie = page;
	};

	return (
		<ToolboxContext.Provider value={{
			getCookie,
			setDefaultCookie,
			setPage,
			setLanguage,
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
