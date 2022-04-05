import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import './MyStackedAreaChart.css'

const MyStackedAreaChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 600200
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 400000
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 690000
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 205000
        }
    ];
    return (
        <div>
            <div className='chart-text'>
                <h3>Stacked Area Chart</h3>
            </div>
            <AreaChart width={400} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </div>
    );
};

export default MyStackedAreaChart;