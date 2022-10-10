import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const { id, logo, name, total } = data
    const navigate = useNavigate()
    const navigateRoute = () => {
        navigate(`/quiz/${id}`)
        console.log(`/quiz/${id}`)
    }
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
            <figure><img src={logo} alt="Shoes" className=' bg-zinc-300' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className='text-base text-left font-bold'>Number of Quiz:  {total}</h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={navigateRoute}>Start Contest</button>
                </div>
            </div>
        </div>

    );
};

export default Card;