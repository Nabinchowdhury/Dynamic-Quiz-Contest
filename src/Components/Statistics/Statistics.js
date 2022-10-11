import React, { useContext } from 'react';
import { apiContext } from '../Layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const Statistics = () => {
    const data = useContext(apiContext)
    // console.log(data)
    return (
        <div className='my-24 flex flex-col justify-evenly  lg:flex-row '>

            <BarChart
                width={500}
                height={300}
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


            <LineChart
                width={500}
                height={300}
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

        </div>
    );
};

export default Statistics;