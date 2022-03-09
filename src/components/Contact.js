import React, { useState } from 'react';

import {validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('You entered an invalid email.');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
    };

    return (
        <div className='contact-me'>
            <h3 className="content is-medium ">Contact Me</h3>
            <div>   
                <h4 className='content is-small'>Click the following links to reach me:</h4>
                    <a href="https://github.com/ScalexanderB" target="_blank" rel="noreferrer">
                      <img className="social-link" src="img/iconfinder-icon2.svg" alt="Github Logo"/>
                    </a>
                    <a href="mailto:scottabradley91@gmail.com"
                    target="_blank" rel="noreferrer">
                      <img className='social-link' src="img/103176_mail_email_icon (1).svg" alt="Email Logo"/>   
                    </a>
                    <a
                      href="https://www.linkedin.com/in/scottalexanderb/" target="_blank" rel="noreferrer">
                      <img className="social-link" src="img/104493_linkedin_icon.svg" alt="LinkedIn Logo"/>        
                    </a>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name</label>
                    <input 
                           className="input" 
                           type="text" 
                           name="name"
                           placeholder="Scott Bradley" 
                           defaultValue={name} 
                           onBlur={handleChange} 
                    /> 
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email Address</label>
                    <input 
                           className="input" 
                           type="email" 
                           name="email"
                           placeholder='scottabradley91@gmail.com' 
                           defaultValue={email} 
                           onBlur={handleChange} 
                    />
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea 
                            className="textarea" 
                            name="message" 
                            rows="5"
                            placeholder='Enter a message..' 
                            defaultValue={message} 
                            onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button is-medium is-fullwidth" data-testid="button">Submit</button>
            </form>
                    
        </div>
    );
}

export default Contact;
