import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { toastContext } from '../QuizContest/QuizContest';

const Option = ({ option, count, correctAnswer, question }) => {
    const toastFunc = useContext(toastContext)
    return (
        <div className='rounded mx-5 text-xl bg-slate-200 hover:bg-slate-300 p-2 text-gray-900' >
            <input type="radio" id={option} name={count} value={option} onClick={(e) => toastFunc(e.target, correctAnswer, question)} />
            <label htmlFor={option} className="ml-2">{option}</label>
            <ToastContainer />
        </div>
    );
};

export default Option;