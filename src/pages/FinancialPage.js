import React from 'react';
import FinancialComponent from '../components/FinancialComponent';
import FinancialForm from '../forms/FinancialForm';

const FinancialPage = () => {
    return (
        <div>
            <h1>Financial Page</h1>
            <FinancialComponent />
            <FinancialForm />
        </div>
    );
};

export default FinancialPage;
