import React, { useState, useEffect } from 'react';

const BusinessComponent = () => {
    const [overview, setOverview] = useState({});
    const [customers, setCustomers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            await Promise.all([fetchOverview(), fetchCustomers(), fetchSuppliers(), fetchOrders()]);
        } catch (err) {
            setError('Error loading business data');
        } finally {
            setLoading(false);
        }
    };

    const fetchOverview = async () => {
        try {
            const response = await fetch('http://localhost:5000/transactions');
            const data = await response.json();
            const totalIncome = data.filter(t => t.type === 'Income').reduce((acc, t) => acc + t.amount, 0);
            const totalExpense = data.filter(t => t.type === 'Expense').reduce((acc, t) => acc + t.amount, 0);
            setOverview({ revenue: totalIncome, expenses: totalExpense, profit: totalIncome - totalExpense });
        } catch {
            setError('Failed to load overview data');
        }
    };

    const fetchCustomers = async () => {
        try {
            const response = await fetch('http://localhost:5000/customers');
            const data = await response.json();
            setCustomers(data);
        } catch {
            setError('Failed to load customers');
        }
    };

    const fetchSuppliers = async () => {
        try {
            const response = await fetch('http://localhost:5000/suppliers');
            const data = await response.json();
            setSuppliers(data);
        } catch {
            setError('Failed to load suppliers');
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/orders');
            const data = await response.json();
            setOrders(data);
        } catch {
            setError('Failed to load orders');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Business Overview</h2>
            <p><strong>Revenue:</strong> ${overview.revenue}</p>
            <p><strong>Expenses:</strong> ${overview.expenses}</p>
            <p><strong>Profit:</strong> ${overview.profit}</p>

            <section>
                <h3>Customers</h3>
                {customers.length > 0 ? (
                    <ul>
                        {customers.map(customer => (
                            <li key={customer.id}>
                                {customer.name} - {customer.email}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No customers found.</p>
                )}
            </section>

            <section>
                <h3>Suppliers</h3>
                {suppliers.length > 0 ? (
                    <ul>
                        {suppliers.map(supplier => (
                            <li key={supplier.id}>
                                {supplier.name} - {supplier.contact}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No suppliers found.</p>
                )}
            </section>

            <section>
                <h3>Orders</h3>
                {orders.length > 0 ? (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id}>
                                Order #{order.id} by {order.customer} - Total: ${order.total}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No orders found.</p>
                )}
            </section>
        </div>
    );
};

export default BusinessComponent;
