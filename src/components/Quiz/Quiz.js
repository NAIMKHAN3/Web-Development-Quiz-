import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { faCoffee, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Option from '../Option/Option';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData()
    const { name, questions } = quiz.data;
    // console.log(name)
    // const { options, correctAnswer, question } = questions[0]
    return (
        <div className='quiz-container'>
            <h1>Quiz Of {name} <button><FontAwesomeIcon icon={faArrowRightLong} /></button></h1>
            <div>

                {
                    questions.map(questions => <Question key={questions.id} questions={questions}></Question>)
                }


            </div>

        </div>
    );
};

export default Quiz;