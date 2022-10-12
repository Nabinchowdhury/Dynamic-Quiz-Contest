import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Modal/Modal';


export const toastContext = createContext()

const QuizContest = () => {


    const { data } = useLoaderData()
    const { name, questions } = data

    const [rights, setRight] = useState([])
    const [wrongs, setWrong] = useState([])

    const showToastMessage = (selected, correct, question) => {
        if (selected.value === correct) {
            selected.parentNode.className = "rounded mx-5 text-xl bg-green-500  p-2 text-gray-900"
            toast.success('Good job! Correct Answer .', {
                position: toast.POSITION.TOP_CENTER
            });
            checkRight(question)
        }
        else {
            selected.parentNode.className = "rounded mx-5 text-xl bg-red-500  p-2 text-gray-900"
            toast.error('Ops! Wrong Answer.', {
                position: toast.POSITION.TOP_CENTER
            });
            checkWrong(question)
        }

    };
    const checkRight = (selectedQuestion) => {

        let rightArray = []

        const existsRight = rights.find(right => right === selectedQuestion)
        if (!existsRight) {
            rightArray.push(...rights, selectedQuestion)
            setRight(rightArray)
            const restWrong = wrongs.filter(wrong => wrong !== selectedQuestion)
            if (restWrong) {
                setWrong(restWrong)
            }
        }
    }
    const checkWrong = (selectedQuestion) => {
        let wrongArray = []
        const existsWrong = wrongs.find(wrong => wrong === selectedQuestion)
        if (!existsWrong) {
            wrongArray.push(...wrongs, selectedQuestion)
            setWrong(wrongArray)
            const restRight = rights.filter(right => right !== selectedQuestion)
            if (restRight) {

                setRight(restRight)
            }
        }
    }

    let count = 0;
    return (
        <toastContext.Provider value={showToastMessage}>
            <Modal rights={rights} wrongs={wrongs} total={questions}></Modal>
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

                <label htmlFor="my-modal-6" className="btn modal-button px-10 my-10 bg-blue-500 hover:bg-blue-700 border-0 text-white">Submit</label>
            </div>
        </toastContext.Provider>
    );
};

export default QuizContest;