import React, { useState, useEffect } from 'react';

const CommerceComponent = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
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
            await Promise.all([fetchProducts(), fetchCategories(), fetchOrders()]);
        } catch (err) {
            setError('Error loading commerce data');
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProducts(data);
        } catch {
            setError('Failed to load products');
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/categories');
            const data = await response.json();
            setCategories(data);
        } catch {
            setError('Failed to load categories');
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
            <h2>Commerce Overview</h2>

            <section>
                <h3>Products</h3>
                {products.length > 0 ? (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products available.</p>
                )}
            </section>

            <section>
                <h3>Categories</h3>
                {categories.length > 0 ? (
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No categories found.</p>
                )}
            </section>

            <section>
                <h3>Orders</h3>
                {orders.length > 0 ? (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id}>
                                Order #{order.id} - Total: ${order.total} - Customer: {order.customerName}
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

export default CommerceComponent;
// AccountingComponent.js
import React from 'react';

const AccountingComponent = ({ overview }) => {
    return (
        <div>
            <h2>Accounting Overview</h2>
            <p><strong>Revenue:</strong> ${overview.revenue}</p>
            <p><strong>Expenses:</strong> ${overview.expenses}</p>
            <p><strong>Profit:</strong> ${overview.profit}</p>
        </div>
    );
};

export default AccountingComponent;
