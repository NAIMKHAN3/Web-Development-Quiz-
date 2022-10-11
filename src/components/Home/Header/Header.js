import React from 'react';
import image from './large.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img className='img' src={image} alt="" />
            <div className='header-info'>
                <h1>Web Developer</h1>
                <h4>To become a web developer you need to learn</h4>
                <h2>HTML</h2>
                <h2>CSS</h2>
                <h2>BOOSTRAP</h2>
                <h2>JAVA SCRIPT</h2>
                <h2>REACT JS. ETC.</h2>
            </div>
        </div>
    );
};

export default Header;