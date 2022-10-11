import React from 'react';
import './option.css'

const Option = ({ option, handleOption }) => {
    return (
        <div className=''>
            {/* <input type="radio"> {option}</input> */}
            {/* <p>{option}</p> */}
            <button onClick={() => handleOption(option)} className='option'>{option}</button>

            {/* <label>{option}</label><br /> */}

        </div>
    );
};

export default Option;