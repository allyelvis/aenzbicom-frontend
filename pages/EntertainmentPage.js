// Entertainment Page
import React from 'react';
import { events, content, ticketing } from '../Entertainment';

function EntertainmentPage() {
    return (
        <div>
            <h1>Entertainment Module</h1>
            <p>{events()}</p>
            <p>{content()}</p>
            <p>{ticketing()}</p>
        </div>
    );
}

export default EntertainmentPage;
    // Add functionality here
