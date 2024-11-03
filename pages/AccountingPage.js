// Accounting Page
import React from 'react';
import { invoicing, payroll, taxation } from '../Accounting';

function AccountingPage() {
    return (
        <div>
            <h1>Accounting Module</h1>
            <p>{invoicing()}</p>
            <p>{payroll()}</p>
            <p>{taxation()}</p>
        </div>
    );
}

export default AccountingPage;
    // Add functionality here
