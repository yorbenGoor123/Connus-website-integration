import {decorate, observable, action} from 'mobx';
import SectionService from '../services/SectionService';




class SectionStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.sectionService = new SectionService(this.rootStore.firebase);
        this.sections = [];
        
    }

    addSection (section) {
        this.sections.push(section);
    }


    findSectionById(id){
        return this.sections.find(section => section.id === id);
    }
}

decorate(SectionStore, {
    rootStore: observable,
    sections: observable,
    findSectionById: action,
    addSection: action
})


export default SectionStore;

