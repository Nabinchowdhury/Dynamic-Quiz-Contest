import React from 'react';
import Option from '../Option/Option';

const Question = (quiz) => {
    const { id, question, correctAnswer, options } = quiz.question
    const count = quiz.count
    // console.log(options)
    return (
        <div className='w-3/4 mx-auto rounded-lg bg-slate-50  mt-5 py-5'>
            <h4 className='text-2xl font-600'>Quiz {count}: {question}</h4>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mt-5'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} count={count}></Option>)
                    // options.map((option, idx) => console.log(option))
                }
            </div>
        </div>
    );
};

export default Question;