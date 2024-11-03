// RetailComponent.js
import React from 'react';

const RetailComponent = ({ products, sales, customers }) => {
    return (
        <div>
            <h2>Retail Overview</h2>
            <div>
                <h3>Product Information</h3>
                <p><strong>Total Products:</strong> {products.length}</p>
            </div>
            <div>
                <h3>Sales Overview</h3>
                <p><strong>Total Sales:</strong> {sales.length}</p>
            </div>
            <div>
                <h3>Customer Information</h3>
                <p><strong>Total Customers:</strong> {customers.length}</p>
            </div>
        </div>
    );
};

export default RetailComponent;
