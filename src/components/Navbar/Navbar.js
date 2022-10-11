import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Web Development Quiz</h2>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/charts'>Charts</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blog'>Blog</NavLink>
            </div>

        </div>
    );
};

export default Navbar;