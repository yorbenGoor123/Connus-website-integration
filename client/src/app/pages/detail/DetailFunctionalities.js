import React, { useEffect } from 'react';
import style from './DetailFunctionalities.module.css'
import HeaderFunctionalities from '../../partials/HeaderFunctionalities/HeaderFunctionalities';

import SectionInfo from '../../partials/SectionInfo/SectionInfo';
import Footer from '../../partials/Footer/Footer';
import { rootStore } from '../../../stores';
import { useObserver } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { autorun } from 'mobx';
import { useStore } from '../../../hooks';

import {Link} from 'react-scroll'





const DetailFunctionalities = () => {


    const { id } = useParams();
    const {uiStore} = useStore();

        
    
    useEffect (() => autorun(() => {
        setTimeout(() => {
            uiStore.loaded();
        }, 800);
        
    }));

    
            

            uiStore.setFunctionality(rootStore.functionalityStore.findFunctionalityById(id));
            console.log(rootStore.functionalityStore.functionalities);
  

    

  
    
    return useObserver(() => (

        <div className={style.detailWrapper}>
           <HeaderFunctionalities />
        
           {uiStore.isLoaded && uiStore.selectedFunctionality ? (
               <>
               <div className={style.detailPageLanding}>
               <div className={style.detailPageLanding__info}>
                    
                    <p className={style.detailPageLanding__info__title}>{uiStore.selectedFunctionality.title}</p>
               </div>
                <img className={style.detailPageLanding__headerImage} src={require(`../../assets/detailpages/01-content-creator/header${uiStore.selectedFunctionality.image}.svg`)} alt="headerImage"></img>
           </div>

           
            <ul className={style.detailPage__MenuItems}>
                {uiStore.selectedFunctionality.sections.map(section => (
                            <>
                               <Link to={section.id} duration={500} smooth={true} offset={-100}> <li key={section.id} className={style.detailPage__MenuItem}>{section.title}</li></Link>
                            </>
                ))}

            </ul>
            <div className={style.sectionsWrapper}>
            <div className={style.sections}>
            {uiStore.selectedFunctionality.sections.map(section => (
                    <SectionInfo key={section.id}
                    sectionId={section.id}
                    title={section.title} 
                    text={section.text} 
                    illustration={section.image} 
                    direction={section.direction}
                    marginLeft={section.marginLeft}
                    marginRight = {section.marginRight} />
            ))}

            </div>
            </div>
           <Footer />
           </>
           ): null}
        
           
        </div>

        
    ));
};

export default DetailFunctionalities;