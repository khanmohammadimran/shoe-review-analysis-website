import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyStackedAreaChart from '../MyStackedAreaChart/MyStackedAreaChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className='secondary-review-title'>
                <h2>This is Dashboard</h2>
            </div>
            <div className='charts'>
                <MyLineChart></MyLineChart>
                <MyStackedAreaChart></MyStackedAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;