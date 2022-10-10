import React, { useContext } from 'react';
import { apiContext } from '../Layout/Main';

const Home = () => {
    const datas = useContext(apiContext)
    console.log(datas)
    return (
        <div>
            {
                datas.map(data => {

                })
            }

        </div>
    );
};

export default Home;