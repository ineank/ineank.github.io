import React, { useRef } from 'react';
import mail from "../assets/icon_mail.svg";
import linkedin from "../assets/icon_linkedin.svg";
import git from "../assets/icon_git.svg";
import "./footer.css"

export function Footer() {
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
        <footer>
            <div className="flex_container">
                <div className="left" onClick={copyToClipboard}>
                    <img src={mail} alt="Mail icon"></img>
                    <span ref={emailRef} > ineandrea38@gmail.com</span>
                </div>
                <div className="middle">
                    <a href="https://www.linkedin.com/in/ine-andrea-krogseth-160aa01b7" target="_blank" rel="noopener noreferrer"> <img src={linkedin}></img> </a>
                    <a href="https://gitlab.stud.idi.ntnu.no/ineak" target="_blank" rel="noopener noreferrer"> <img src={git}></img> </a>
                </div>
                <p className="right">© 2023 Ine Andrea Krogseth</p>
            </div>
            
        </footer>
    );
}