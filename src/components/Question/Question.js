import React from 'react';
import Swal from 'sweetalert2';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ questions }) => {
    console.log(questions.correctAnswer)
    const { options, question, correctAnswer } = questions

    const tost = () => {
        Swal.fire(
            'Congratulation',
            'Your Answar Is Correct',
            'success'
        )
    }
    const tostFalse = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops So Sad...',
            text: 'Your Answer Is Rong Answer',

        })
    }


    const handleOption = (option) => {
        console.log(option)
        if (option === correctAnswer) {
            tost()
        }
        else {
            tostFalse()
        }

    }

    return (
        <div className='question-container'>
            <h2>quiz : {question}</h2>
            <div className='quiz-option'>
                {
                    options.map(option => <Option key={option} handleOption={handleOption} option={option}></Option>)
                }
            </div>

        </div>
    );
};


export default Question;