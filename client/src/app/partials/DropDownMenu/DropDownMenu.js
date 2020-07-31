import React from 'react';

import Dropdown from '../../components/DropDown/Dropdown';

import style from './DropDownMenu.module.css';
import {useStore} from '../../../hooks/index';
import { Link } from 'react-router-dom';



const DropDownMenu = () => {

    

    const {functionalityStore} = useStore();
    


    let functionalityArray = [];
    for (let i = 1; i<= functionalityStore.filteredFunctionalities.length; i++){
      let functionality = functionalityStore.filteredFunctionalities.find(functionality => functionality.sorted === i);
      functionalityArray.push(functionality);
      
    }

    


    return (
        <div className={style.dropDownMenu}>

            {functionalityArray.map(functionality => (
            
                <Link key={functionality.id} to={`/functionality/${functionality.id}`} style={{ textDecoration: 'none' }}>
                <Dropdown key={functionality.id} icon={functionality.icon} title={functionality.title} description={functionality.description} /> 
                </Link>
            ))}
           
        </div>
    );
};

export default DropDownMenu;