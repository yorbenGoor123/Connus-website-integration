import React from 'react';
import style from './Dropdown.module.css'

const Dropdown = ({icon, title, description}) => {
    return (
        <div className={style.dropdown__menu}>
            <img className={style.dropdown__menuItem__icon} src={require(`../../assets/iconFun${icon}.svg`)} alt="menu item"></img>
            <div className={style.dropdown__menu__info}>
                <h2 className= {style.dropdown__menu__title}>{title}</h2>
                <p className = {style.dropdown__menu__description}>{description}</p>
            </div>
        </div>
    );
};

export default Dropdown;