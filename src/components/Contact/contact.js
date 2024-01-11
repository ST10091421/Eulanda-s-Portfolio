import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/FacebookLogo.jpg';
import InstagramIcon from '../../assets/instagram.jpg';
import TwitterIcon from '../../assets/Twitter.jpg';
import emailjs from '@emailjs/browser';
emailjs.init("user_your_emailjs_user_id");


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        console.log("Form submitted"); // Add this line for debugging
    
        emailjs.sendForm('service_jr8cesd', 'template_m8mxj8f', form.current, 'vn9sVOFw_JNt_mzH_')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    
    
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder='Your message'></textarea>
                    <button type='submit' className="submitBtn">Submit</button>

                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        
                    </div>
                </form>

            </div>

        </section>
    );
    }
export default Contact