import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyTwoLevelPieChart from '../MyTwoLevelPieChart/MyTwoLevelPieChart';

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard</h1>
            <div>
                <MyLineChart></MyLineChart>
                <MyTwoLevelPieChart></MyTwoLevelPieChart>
            </div>
        </div>
    );
};

export default Dashboard;