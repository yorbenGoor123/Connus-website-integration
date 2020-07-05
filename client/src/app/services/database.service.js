import React, { createContext, useContext } from 'react';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from '../config';

const DatabaseContext = createContext();
const useDatabase = () => useContext(DatabaseContext);

const DatabaseProvider = ({ children }) => {
    const initFirebase = () => {
        firebase.initializeApp(firebaseConfig);
    };

    const newsletterSignUp = (data) => {
        firebase.firestore().collection('contacts').doc(data.email).get().then((doc) => {
            if(!doc.exists) {
                firebase.firestore().collection('contacts').doc(data.email).set({
                    email: data.email,
                    influencer: data.target,
                    date: Date.now(),
                });
            } else {
                return false;
            };
        });
    };

    initFirebase();

    return (
        <DatabaseContext.Provider value={{
            newsletterSignUp,
        }}>
            { children }
        </DatabaseContext.Provider>
    )
};

export {
    DatabaseProvider,
    useDatabase,
    DatabaseContext,
};