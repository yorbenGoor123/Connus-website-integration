import React, { useState } from 'react';

import { useDatabase } from '../../services';

import { SmallTitle } from '../../components';

const NewsletterForm = ({target, title, text, button}) => {
    const { newsletterSignUp } = useDatabase();
    const [ info, setInfo ] = useState();
    const [ form, setForm ] = useState({
        "email": "",
        "target": target,
    });

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const check = await newsletterSignUp(form);
        console.log(check);
    };

    return (
        <div className="newsletter-form">
            <SmallTitle
                text={title}
                center={true}
                color="title-white"
            /> 

            <p className="newsletter-form__info">
                { text }
            </p>

            <form onSubmit={(e) => submit(e)}>
                <div className="newsletter-form__input--email">
                    <label htmlFor="email">E-mail</label>
                    <input onChange={(e) => change(e)} name="email" id="email" placeholder="youremail@connus.be" required/>
                </div>

                <div className="newsletter-form__input--submit">
                    <button type="submit">
                        <div className="line"></div>
                        <h5>
                            { button }
                        </h5>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewsletterForm;