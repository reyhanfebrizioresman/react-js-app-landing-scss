import React from 'react'
import './Features.scss'
import img1 from '../Image/feature_1.png'
import img2 from '../Image/feature_2.png'
import img3 from '../Image/feature_3.png'
import Card from './Card'
const Features = () => {
    return (
        <div className="features-container" id="features">
            <div className="card-wrapper" 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <Card img={img1} title="Development Course"/>  
                <Card img={img2} title="Money Saving Services"/>  
                <Card img={img3} title="Usability Interface"/>  
            </div>
        </div>
    )
}

export default Features
