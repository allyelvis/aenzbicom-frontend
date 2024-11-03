// Business Page
import React from 'react';
import { strategy, operations, management } from '../Business';

function BusinessPage() {
    return (
        <div>
            <h1>Business Module</h1>
            <p>{strategy()}</p>
            <p>{operations()}</p>
            <p>{management()}</p>
        </div>
    );
}

export default BusinessPage;
