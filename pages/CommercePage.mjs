// Commerce Page
import React from 'react';
import { sales, marketing, ecommerce } from '../Commerce';

function CommercePage() {
    return (
        <div>
            <h1>Commerce Module</h1>
            <p>{sales()}</p>
            <p>{marketing()}</p>
            <p>{ecommerce()}</p>
        </div>
    );
}

export default CommercePage;
    // Add functionality here
