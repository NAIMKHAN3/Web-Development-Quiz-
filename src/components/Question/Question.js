import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ questions }) => {
    // console.log(questions)
    const { options, question } = questions
    return (
        <div className='question-container'>
            <h2>quiz : {question}</h2>
            <div className='quiz-option'>
                {
                    options.map(option => <Option key={option} option={option}></Option>)
                }
            </div>

        </div>
    );
};

export default Question;