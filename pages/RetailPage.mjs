// Retail Page
import React from 'react';
import { inventory, sales, customerservice } from '../Retail';

function RetailPage() {
    return (
        <div>
            <h1>Retail Module</h1>
            <p>{inventory()}</p>
            <p>{sales()}</p>
            <p>{customerservice()}</p>
        </div>
    );
}

export default RetailPage;
    // Add functionality here
