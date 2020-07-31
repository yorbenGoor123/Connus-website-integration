import { decorate, observable, action } from "mobx";
import FunctionalityService from "../services/FunctionalityService";

class FunctionalityStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.functionalityService = new FunctionalityService(this.rootStore.firebase);
        this.functionalities = [];
        this.filteredFunctionalities = undefined;
    }

    addFunctionality(functionality) {
        this.functionalities.push(functionality);
    

    }

    setFiltered (functionality) {
        this.filteredFunctionalities = functionality;
    }


    findFunctionalityById(id){
        return this.functionalities.find(functionality => functionality.id === id);
    }

    filterFunctionalities(filter) {
        if(filter === 'content-creator') {
            return this.functionalities.filter(functionality => filter ? functionality.targetAudience === filter : true);
        }else {
            return this.functionalities.filter(functionality => filter ? functionality.targetAudience === filter : true);
        }
    }
}

decorate(FunctionalityStore, {
    functionalities: observable,
    filteredFunctionalities: observable,
    addFunctionality: action,
    findFunctionalityById: action,
    filterFunctionalities: action,
    setFiltered: action,
    
    
})

export default FunctionalityStore;