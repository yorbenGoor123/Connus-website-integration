import React from 'react';

const InputField = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} id={props.id}/>
    );
}

export default InputField;