
import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";


class FunctionalityModel {
    constructor({id, targetAudience, icon, title, description, sorted}){
        this.id = id;
        this.targetAudience = targetAudience;
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.sorted = sorted;
        rootStore.functionalityStore.addFunctionality(this);
    }
}


decorate(FunctionalityModel, {
    id: observable,
    targetAudience: observable,
    icon: observable,
    title: observable,
    description: observable
})

const functionalityConverter = {
  toFirestore: function(functionality) {
    return {
    icon: functionality.icon,
    title: functionality.title,
    description:functionality.description,
    targetAudience:functionality.targetAudience,
    sorted: functionality.sorted
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    if (!rootStore.functionalityStore.findFunctionalityById(snapshot.id)){
      return new FunctionalityModel({
      id: snapshot.id,
      icon: data.Icon,
      title: data.Title,
      description: data.Description,
      targetAudience: data.TargetAudience,
      sorted: data.sorted
      });
    }

  }
};

export {functionalityConverter}

export default FunctionalityModel;