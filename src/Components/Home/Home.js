import React, { useContext } from 'react';
import Card from '../Card/Card';
import { apiContext } from '../Layout/Main';

const Home = () => {
    const datas = useContext(apiContext)
    return (

        <div className='mt-10'>
            <img src="https://thumbs.dreamstime.com/b/ready-quiz-written-notebook-marker-pen-glasses-wooden-desk-business-concept-ready-quiz-118902066.jpg" alt="" className='w-auto h-96 lg:w-2/4 mx-auto rounded-lg mb-10' />
            <h1 className='text-4xl mx-5 font-bold text-rose-400 underline md:mx-24'>Participate our contests to test your knowledge</h1>
            <div className='grid grid-cols-1 gap-4 mx-5 my-10 md:grid-cols-2 md:mx-24 lg:grid-cols-3'>
                {
                    datas.map(data => <Card key={data.id} data={data}></Card>)
                }

            </div>
        </div>
    );
};

export default Home;