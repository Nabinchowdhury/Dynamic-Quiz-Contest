import React, { useState } from 'react';
import Option from '../Option/Option';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'

const Question = (quiz) => {
    const { id, question, correctAnswer, options } = quiz.question
    const count = quiz.count
    // console.log(options)
    const [show, setShow] = useState(false)
    return (
        <div className='w-3/4 mx-auto rounded-lg bg-slate-50  mt-5 py-5'>
            <div className='flex justify-evenly items-center'>
                <h4 className='text-xl font-600 w-3/4'>Quiz {count}: {question}</h4>
                <EyeIcon className="h-6 w-6 text-blue-400 hover:text-blue-700 cursor-pointer" onClick={() => setShow(!show)}></EyeIcon>
            </div>
            <h4 className={`text-xl font-600 w-2/4 bg-green-200 mx-auto my-4 rounded-lg p-4 ${show ? "block" : "hidden"}`}>Correct Answer: {correctAnswer}</h4>
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