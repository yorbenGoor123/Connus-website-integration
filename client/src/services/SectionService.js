import 'firebase/firestore';
import { sectionConverter } from '../models/SectionModel';

class SectionService {
    constructor(firebase) {
        this.db = firebase.firestore();
        this.realtimeUpdates()
    }

    realtimeUpdates = async () =>{
        await this.db.collection("Section")
        .withConverter(sectionConverter)
        .onSnapshot(this.getSections);
      }
    
      getSections = async () => {
        const sections = await this.db
        .collection("Section")
        .withConverter(sectionConverter)
        .get();
    
        return sections.docs.map(doc => doc.data());
    
      };
}

export default SectionService;