import {decorate, action, observable} from 'mobx'

class UiStore {
    constructor () {
        this.dropdown = false;
    
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
    viewDropdown: action,
    disableDropdown: action,
    setSorted: action
})

const uiStore = new UiStore();

export default UiStore;

export {uiStore};