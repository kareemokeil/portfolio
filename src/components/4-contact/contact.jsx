import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contactanimation from '../../../src/components/animation/contact.json';
import React from 'react';

function Contact() {
    const [state, handleSubmit] = useForm("mlderjrg");

    if (state.succeeded) {
        return (
            <div className='success-message'>
                <h1>Thank You!</h1>
                <p>Your message has been successfully sent. We'll get back to you shortly.</p>
            </div>
        );
    }

    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                Contact Us
            </h1>
            <p>Contact us for more information and get notified when we publish something new.</p>
            <div style={{ justifyContent: "space-between" }} className='flex'>
                <form onSubmit={handleSubmit} className='flex'>
                    <div className='flex'>
                        <label htmlFor="email">Email Address</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors} />
                    </div>
                    <div className='flex'>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            required
                            id="message"
                            name="message" />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors} />
                    </div>
                    <button className='submit' type="submit" disabled={state.submitting}>
                        {state.submitting ? "Submiting..." : "submit"}
                    </button>
                </form>
                <div style={{height:"355"}} className='animation'><Lottie className='contact-animation' animationData={contactanimation} />
                </div>
            </div>
        </section>
    );
}

export default Contact;
