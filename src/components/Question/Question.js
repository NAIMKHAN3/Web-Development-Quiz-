import React from 'react';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const tostIcon = () => {
        Swal.fire(`Right Answer: ${correctAnswer}`)
    }
    const tostFalse = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops So Sad...',
            text: 'Your Answer Is Rong Answer',

        })
    }
    const handleIcon = () => {
        tostIcon()
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
            <div><h2>quiz : {`${question}`}</h2></div>
            <div className='eye-div'><button onClick={handleIcon} className='eye-icon'><FontAwesomeIcon className='eye-icon' icon={faEye} /></button></div>
            <div className='quiz-option'>

                {
                    options.map(option => <Option key={option} handleOption={handleOption} option={option}></Option>)
                }
            </div>

        </div>
    );
};


export default Question;