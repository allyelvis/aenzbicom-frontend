import React from 'react';

const BusinessPage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Business Page</h1>
            <p>Welcome to the Business section of the Aenzbi application.</p>
            <section>
                <h2>Our Services</h2>
                <ul>
                    <li>Business Management</li>
                    <li>Financial Accounting</li>
                    <li>Customer Relationship Management (CRM)</li>
                    <li>Sales Analytics and Reporting</li>
                </ul>
            </section>
            <section>
                <h2>About Our Business Solutions</h2>
                <p>
                    We provide comprehensive solutions for business management, financial accounting,
                    and customer relationship. Our tools are designed to help businesses streamline
                    operations, improve customer engagement, and drive profitability.
                </p>
            </section>
        </div>
    );
};

export default BusinessPage;