import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li><Link to='/business'>Business Page</Link></li>
                <li><Link to='/financial'>Financial Page</Link></li>
                <li><Link to='/commerce'>Commerce Page</Link></li>
                <li><Link to='/accounting'>Accounting Page</Link></li>
                <li><Link to='/hospitality'>Hospitality Page</Link></li>
                <li><Link to='/retail'>Retail Page</Link></li>
                <li><Link to='/entertainment'>Entertainment Page</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;
