import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const apiContext = createContext([])
const Main = () => {
    const { data } = useLoaderData()

    return (
        <div>
            <apiContext.Provider value={data}>
                <Header></Header>
                <Outlet></Outlet>
            </apiContext.Provider>

        </div>
    );
};

export default Main;