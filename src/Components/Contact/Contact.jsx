import React from 'react'
import './Contact.scss'
const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1>Send Me Email</h1>
            <div className="input">
                <input type="text" placeholder="example@gmail.com" />
                <a href="" className="btn-send">Contact</a>
            </div>
        </div>
    )
}

export default Contact
