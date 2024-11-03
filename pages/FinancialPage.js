// Financial Page
import React from 'react';
import { reporting, budgeting, investments } from '../Financial';

function FinancialPage() {
    return (
        <div>
            <h1>Financial Module</h1>
            <p>{reporting()}</p>
            <p>{budgeting()}</p>
            <p>{investments()}</p>
        </div>
    );
}

export default FinancialPage;
