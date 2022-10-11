import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1> 404</h1>
            <h1>ERROR</h1>
            <h4>Page Not Found</h4>
            <Link to='/'>Back to Home page</Link>

        </div>
    );
};

export default ErrorPage;