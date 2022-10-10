import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Web Development Quiz</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/charts'>Charts</Link>
                <Link to='/blog'>Blog</Link>
            </div>

        </div>
    );
};

export default Navbar;