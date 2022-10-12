import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
    const quiz = useLoaderData();
    const quizs = quiz.data

    return (
        <div>
            <Header></Header>
            <div className='card-parant'>
                <div className='home-card'>

                    {
                        quizs.map(quiz => <Card key={quiz.id} quiz={quiz}></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;