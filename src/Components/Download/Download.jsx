import React from 'react'
import download from '../Image/download.png'
import './Download.scss'
const Download = () => {
    return (
        <div className="download-container" id="download">
            <div className="wrapper" 
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="left">
                    <img src={download} alt="" />
                </div>
                <div className="right">
                    <h1>Download And Get The App Now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus repellendus modi dolorum at, dolores culpa minus! Doloribus magnam eos distinctio! Sed commodi vero veniam facilis quos eius perferendis aspernatur.
                    Alias natus repellendus modi dolorum at, dolores culpa minus! Doloribus magnam eos distinctio! Sed commodi vero veniam facilis quos eius perferendis
                    </p>
                    <a href="" className="btn-about">Get The App</a>
                </div>
            </div>
        </div>
    )
}

export default Download
