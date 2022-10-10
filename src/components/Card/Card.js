import { faCoffee, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = ({ quiz }) => {
    console.log(quiz)
    const { name, total, logo, id } = quiz
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='card-info'>
                <h2 className='name'>Name: <span className=''>{name}</span></h2>
                <h3>Total: {total}</h3>
                <NavLink to={`/card/${id}`}><button className='card-btn'>Start Practice <FontAwesomeIcon icon={faArrowRightLong} /></button></NavLink>
            </div>
        </div>
    );
};

export default Card;