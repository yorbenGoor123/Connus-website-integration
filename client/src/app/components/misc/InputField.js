import React from 'react';

const InputField = (props) => {
    return (
        <div className="input-field">
            <input  type="text" placeholder={props.placeholder} id={props.id}/>
        </div>
    );
}

export default InputField;