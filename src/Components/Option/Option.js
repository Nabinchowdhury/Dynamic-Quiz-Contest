import React from 'react';

const Option = ({ option, count }) => {
    console.log(count)
    return (
        <div className='rounded mx-5 text-xl bg-slate-200 p-2' >
            <input type="radio" id={option} name={count} value={option} />
            <label for={option} className="ml-2">{option}</label>
        </div>
    );
};

export default Option;