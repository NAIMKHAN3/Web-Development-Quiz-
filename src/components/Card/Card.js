import { faCoffee, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = ({ quiz }) => {

    const { name, total, logo, id } = quiz
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='card-info'>
                <h2 className='name'>Name: <span className=''>{name}</span></h2>
                <h3>Question: {total}</h3>
                <NavLink to={`/card/${id}`}><button className='card-btn'> Quiz Start <FontAwesomeIcon icon={faArrowRightLong} /></button></NavLink>
            </div>
        </div>
    );
};

export default Card;