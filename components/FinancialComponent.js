// FinancialComponent.js
import React from 'react';

const FinancialComponent = ({ financials, overview, customers, suppliers, products, orders }) => {
    return (
        <div>
            <h2>Financial Overview</h2>

            <div>
                <h3>Income & Expenses</h3>
                <p><strong>Total Revenue:</strong> ${overview.revenue}</p>
                <p><strong>Total Expenses:</strong> ${overview.expenses}</p>
                <p><strong>Net Profit:</strong> ${overview.profit}</p>
            </div>

            <div>
                <h3>Cash Flow Summary</h3>
                <p><strong>Cash Flow:</strong> ${financials.cashFlow}</p>
                <p><strong>Net Worth:</strong> ${financials.netWorth}</p>
                <p><strong>Liabilities:</strong> ${financials.liabilities}</p>
            </div>

            <div>
                <h3>Business & Commerce Insights</h3>
                <p><strong>Total Customers:</strong> {customers.length}</p>
                <p><strong>Total Suppliers:</strong> {suppliers.length}</p>
                <p><strong>Total Products:</strong> {products.length}</p>
                <p><strong>Total Orders:</strong> {orders.length}</p>
            </div>
        </div>
    );
};

export default FinancialComponent;
