import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
    const quiz = useLoaderData();
    const quizs = quiz.data

    return (
        <div>

        </div>
    );
};

export default Home;