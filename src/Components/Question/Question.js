import React from 'react';

const Question = (quiz) => {
    const { id, question, correctAnswer, options } = quiz.question
    const count = quiz.count
    console.log(id, question, correctAnswer, options)
    console.log(count)
    return (
        <div className='border w-2/4 mx-auto'>
            <h4>Quiz {count}: {question}</h4>

        </div>
    );
};

export default Question;