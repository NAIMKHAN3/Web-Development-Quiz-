import React from 'react';
import './option.css'

const Option = ({ option }) => {
    return (
        <div className=''>
            {/* <input type="radio"> {option}</input> */}
            {/* <p>{option}</p> */}
            <button className='option'>{option}</button>

            {/* <label>{option}</label><br /> */}

        </div>
    );
};

export default Option;