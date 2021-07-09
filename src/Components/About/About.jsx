import React from 'react'
import frame from '../Image/Frame 19.png'
import './About.scss'
const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="wrapper"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="left">
                    <img src={frame} alt="" />
                </div>
                <div className="right">
                    <h1>Comes With All You Need For Daily Life</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus repellendus modi dolorum at, dolores culpa minus! Doloribus magnam eos distinctio! Sed commodi vero veniam facilis quos eius perferendis aspernatur.
                    Alias natus repellendus modi dolorum at, dolores culpa minus! Doloribus magnam eos distinctio! Sed commodi vero veniam facilis quos eius perferendis
                    </p>
                    <a href="" className="btn-about">Get The App</a>
                </div>
            </div>
        </div>
    )
}

export default About
