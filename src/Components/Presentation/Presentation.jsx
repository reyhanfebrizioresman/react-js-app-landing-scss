import React from 'react'
import present from '../Image/presentation.png'
import './Presentation.scss'
const Presentation = () => {
    return (
        <div className="presentation-container" id="presentations" 
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        >
            <h1>UI Presentation</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={present} alt="" />
        </div>
    )
}

export default Presentation
