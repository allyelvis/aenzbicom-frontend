// HospitalityComponent.js
import React from 'react';

const HospitalityComponent = ({ guests, reservations, services }) => {
    return (
        <div>
            <h2>Hospitality Overview</h2>
            <div>
                <h3>Guest Information</h3>
                <p><strong>Total Guests:</strong> {guests.length}</p>
            </div>
            <div>
                <h3>Reservations</h3>
                <p><strong>Total Reservations:</strong> {reservations.length}</p>
            </div>
            <div>
                <h3>Services Offered</h3>
                <p><strong>Total Services:</strong> {services.length}</p>
            </div>
        </div>
    );
};

export default HospitalityComponent;
