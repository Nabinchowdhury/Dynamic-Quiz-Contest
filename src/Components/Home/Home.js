import React, { useContext } from 'react';
import Card from '../Card/Card';
import { apiContext } from '../Layout/Main';

const Home = () => {
    const datas = useContext(apiContext)
    return (

        <div className='mt-24'>
            <h1 className='text-4xl mx-20 font-bold text-rose-400 underline'>Participate our contests to test your knowledge</h1>
            <div className='grid grid-cols-1 gap-4 mx-24 my-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(data => <Card key={data.id} data={data}></Card>)
                }

            </div>
        </div>
    );
};

export default Home;