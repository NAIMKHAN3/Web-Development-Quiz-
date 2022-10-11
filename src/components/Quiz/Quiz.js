import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData()
    const { name, questions } = quiz.data;

    // console.log(questions)
    // const { options, correctAnswer, question } = questions[0]
    return (
        <div className='quiz-container'>
            <h1>Quiz Of {name} </h1>
            <div>
                {

                    questions.map(questions => <Question key={questions.id} questions={questions}></Question>)
                }
            </div>

        </div>
    );
};

export default Quiz;