// EntertainmentComponent.js
import React from 'react';

const EntertainmentComponent = ({ events, ticketSales, feedback }) => {
    return (
        <div>
            <h2>Entertainment Overview</h2>
            <div>
                <h3>Upcoming Events</h3>
                <p><strong>Total Events:</strong> {events.length}</p>
            </div>
            <div>
                <h3>Ticket Sales</h3>
                <p><strong>Total Ticket Sales:</strong> {ticketSales.length}</p>
            </div>
            <div>
                <h3>Customer Feedback</h3>
                <p><strong>Total Feedback Entries:</strong> {feedback.length}</p>
            </div>
        </div>
    );
};

export default EntertainmentComponent;
