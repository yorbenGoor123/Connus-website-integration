import {decorate, action, observable} from 'mobx'

class UiStore {
    constructor () {
        this.dropdown = false;
        this.selectedFunctionality = undefined;
        this.isLoaded = false;
    
    }


    loaded () {
        this.isLoaded = true;
    }

    setFunctionality (functionality) {
        this.selectedFunctionality = functionality;
        console.log("hello");
       
    }

    viewDropdown () {
        this.dropdown = true;
    }

    disableDropdown() {
        this.dropdown = false;
    }

}


decorate(UiStore, {
    dropdown: observable,
    isLoaded: observable,
    selectedFunctionality: observable,
    viewDropdown: action,
    disableDropdown: action,
    setSorted: action,
    loaded: action,
    setFunctionality: action

})

const uiStore = new UiStore();

export default UiStore;

export {uiStore};