import React from 'react'
import './Card.scss'
const Card = ({title,img}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    )
}

export default Card
