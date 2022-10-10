import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastContext = createContext()

const QuizContest = () => {
    const { data } = useLoaderData()
    const { id, name, questions } = data


    const showToastMessage = (selected, correct) => {

        if (selected === correct) {
            toast.success('Good job! Correct Answer .', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Ops! Wrong Answer.', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    let count = 0;
    return (
        <toastContext.Provider value={showToastMessage}>
            <div className='my-5'>
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
        </toastContext.Provider>
    );
};

export default QuizContest;