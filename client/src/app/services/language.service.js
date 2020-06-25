import React, { createContext, useContext } from 'react';

import text from '../textContent';

const LanguageContext = createContext();
const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({children}) => {
	const getLanguageFromCookie = () => {
		// get cookies and process the string
		const cookieString = document.cookie;
		const cookieArray = cookieString.split(';');
		const cookies = {}
		cookieArray.forEach( (cookie) => {
			const parts = cookie.split('=');
			cookies[parts[0].trim()] = parts[1].trim();
		})

		return cookies.language;
	}

	/**
	 * @param page values: "brand", "influencer"
	 */
	const getText = (page) => {
		const language = getLanguageFromCookie();
		return text[`${language}_${page}`];
	}

	return (
		<LanguageContext.Provider value={{
			getText
		}}>
			{children}
		</LanguageContext.Provider>
	)
};

export {
	LanguageContext,
	LanguageProvider,
	useLanguage,
}
