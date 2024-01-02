import React, { useRef } from 'react';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import linkedin_blue from "../assets/icon_linkedin_blue.svg";
import mail_blue from "../assets/icon_mail_blue.svg";
import "./contactpage.css";
import { useState } from "react";

export function Contactpage() {
    //handling form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    
    //handling copy email to clipboard
    const emailRef = useRef(null);

    const copyToClipboard = () => {
        
        if (emailRef.current) {
            // Select the value inside the span element
            const range = document.createRange();
            range.selectNode(emailRef.current);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            // Copy the selected text to the clipboard
            document.execCommand('copy');

            // Deselect the text after copying
            window.getSelection().removeAllRanges();

            // Optional: Show a notification or perform any other action after copying
            alert('Epostadresse kopiert til utklippstavle!');
        }
    };

    return(
        <>
            <Header />
            <div className="contact_container">
                <div className="left_container">
                    <h1>Si hei!</h1>
                    <p>La oss holde kontakt! Knytt kontakt med meg på Linkedin for utveksling av ideer og muligheter.</p>
                    <a href="https://www.linkedin.com/in/ine-andrea-krogseth-160aa01b7" target="_blank" rel="noopener noreferrer"> <img src={linkedin_blue} alt="Linkedin icon"></img> </a>

                    <div className="left" onClick={copyToClipboard}>
                        <img src={mail_blue} alt="Mail icon"></img>
                        <span ref={emailRef} > ineandrea38@gmail.com</span>
                    </div>
                
                </div>

                <div className="right_container">
                    <div className='right_container_content'>
                        <h2>...eller send meg en mail!</h2>
                        <form >
                            <label>
                                Fullt navn <br/>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required></input>
                            </label>
                            <br/>
                            <label>
                                E-post <br/>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required></input>
                            </label> 
                            <br/>
                            <label>
                                Melding <br/>
                                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </label> 
                            <br/>
                            <button className="orangeButton" type='submit'><h2>Send!</h2></button>
                        </form>
                    </div>
                    
                </div>
            </div>

            <Footer />
        </>
    )
}