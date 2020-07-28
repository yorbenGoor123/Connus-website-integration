import * as firebase from "firebase/app";
import { configure } from 'mobx';
import FunctionalityStore from './FunctionalityStore';
import SectionStore from "./SectionStore";


configure({enforceActions: "observed"});

class RootStore {
    constructor() {
        var secondaryAppConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: String(process.env.REACT_APP_projectId),
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
          };
        // Initialize Firebase
        this.firebase = firebase.initializeApp(secondaryAppConfig, "connus-functionalities");
        this.functionalityStore = new FunctionalityStore(this);
        this.sectionStore = new SectionStore(this);    
    }
}

const rootStore = new RootStore();

export {rootStore}

export default RootStore;