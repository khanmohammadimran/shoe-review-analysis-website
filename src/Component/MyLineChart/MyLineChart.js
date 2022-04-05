import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
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
                <h3>Line Chart</h3>
            </div>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip />
                {/* <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey="sell"></YAxis> */}

            </LineChart>
        </div>
    );
};

export default MyLineChart;