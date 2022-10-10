import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData()
    const { name, questions } = quiz.data;
    console.log(name)
    const { options, correctAnswer, question } = questions[0]
    console.log(options)
    return (
        <div className='quiz-container'>
            <h1>Quiz Of {name}</h1>
            <div>
                <h2>quiz 1: {question}</h2>
                <div className='quiz-option'>
                    {
                        options.map(option => <Option key={option} option={option}></Option>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Quiz;