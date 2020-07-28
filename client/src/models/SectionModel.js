import {decorate, observable} from 'mobx';
import { rootStore } from '../stores';

class SectionModel {
    constructor({id, functionalityId, title, text, direction, image }) {
        this.id = id;
        this.functionalityId = functionalityId;
        this.title = title;
        this.text = text;
        this.direction = direction;
        this.image = image;
        rootStore.sectionStore.addSection(this);
        
        
    }
}

const sectionConverter = {
    toFirestore: function(section) {
      return {
      functionalityId: section.functionalityId,
      title: section.title,
      text:section.text,
      direction:section.direction,
      image: section.image,
      };
    },
    fromFirestore: function(snapshot, options) {
      console.log("hello");
      const data = snapshot.data(options);
    
      if (!rootStore.sectionStore.findSectionById(snapshot.id)){
        return new SectionModel({
        id: snapshot.id,
        functionalityId: data.FunctionalityId,
        title: data.Title,
        text: data.Text,
        direction: data.Direction,
        image: data.Image,
        });
      }
     
    }
  };

decorate(SectionModel, {
    id: observable,
    functionalityId: observable,
    title: observable,
    text: observable,
    direction: observable,
    image: observable
})

export  {sectionConverter}

export default SectionModel;