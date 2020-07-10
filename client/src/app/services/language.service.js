import React, { createContext, useContext } from 'react';

import { useToolbox } from './toolbox.service';
import text from '../textContent';

const LanguageContext = createContext();
const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({children}) => {
	const { getCookie } = useToolbox();

	const getText = (page) => {
		const language = getCookie('language');
		return text[`${language ?? 'en'}_${page ?? 'content-creator'}`];
	};

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
};
