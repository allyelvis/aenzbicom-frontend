// Hospitality Page
import React from 'react';
import { reservations, services, guestmanagement } from '../Hospitality';

function HospitalityPage() {
    return (
        <div>
            <h1>Hospitality Module</h1>
            <p>{reservations()}</p>
            <p>{services()}</p>
            <p>{guestmanagement()}</p>
        </div>
    );
}

export default HospitalityPage;
    // Add functionality here
