import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizContest = () => {
    const { data } = useLoaderData()
    const { id, name, questions } = data
    let count = 0;
    return (
        <div className='my-'>
            <h3 className='text-2xl mx-auto font-bold text-purple-600 mt-10'>Quiz Topic: {name}</h3>
            <div className='mt-10'>
                {
                    questions.map(question => {
                        count += 1;
                        return <Question key={question.id} question={question} count={count}></Question>
                    })
                }
            </div>

        </div >
    );
};

export default QuizContest;