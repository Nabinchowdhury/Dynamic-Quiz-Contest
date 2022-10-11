import React, { useContext } from 'react';
import { apiContext } from '../Layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useContext(apiContext)
    // console.log(data)
    return (
        <div className='my-24 w-full lg:w-3/4 mx-auto '>

            <div className='w-full h-96 my-10'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart

                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="id" fill="#8884d8" />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>

                </ResponsiveContainer>
            </div>

            <div className='w-full h-96  my-10'>
                <ResponsiveContainer width="100%"
                    height="100%">
                    <LineChart

                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;