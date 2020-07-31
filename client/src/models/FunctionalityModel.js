
import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";


class FunctionalityModel {
    constructor({id, targetAudience, icon, image, title, description, sorted}){
        this.id = id;
        this.targetAudience = targetAudience;
        this.icon = icon;
        this.image = image
        this.title = title;
        this.description = description;
        this.sorted = sorted;
        this.sections = [];
        rootStore.functionalityStore.addFunctionality(this);
    }

    linkSection(section) {
      !this.sections.includes(section) && this.sections.push(section);
  }
}


decorate(FunctionalityModel, {
    id: observable,
    targetAudience: observable,
    icon: observable,
    title: observable,
    description: observable,
    image: observable
})

const functionalityConverter = {
  toFirestore: function(functionality) {
    return {
    icon: functionality.icon,
    title: functionality.title,
    description:functionality.description,
    targetAudience:functionality.targetAudience,
    sorted: functionality.sorted,
    image: functionality.image
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
      sorted: data.sorted,
      image: data.HeaderImage
      });
    }

  }
};

export {functionalityConverter}

export default FunctionalityModel;