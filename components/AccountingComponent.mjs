import React, { useState, useEffect } from 'react';

const AccountingComponent = () => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [newTransaction, setNewTransaction] = useState({
        type: '',
        amount: '',
        description: ''
    });

    // Fetch transactions from backend
    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:5000/transactions');
            const data = await response.json();
            setTransactions(data);
            calculateBalance(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const calculateBalance = (transactions) => {
        const balance = transactions.reduce((acc, transaction) => {
            return transaction.type === 'Income'
                ? acc + transaction.amount
                : acc - transaction.amount;
        }, 0);
        setBalance(balance);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const addTransaction = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTransaction),
            });
            const addedTransaction = await response.json();
            setTransactions([...transactions, addedTransaction]);
            calculateBalance([...transactions, addedTransaction]);
            setNewTransaction({ type: '', amount: '', description: '' });
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await fetch(`http://localhost:5000/transactions/${id}`, {
                method: 'DELETE',
            });
            const updatedTransactions = transactions.filter((t) => t.id !== id);
            setTransactions(updatedTransactions);
            calculateBalance(updatedTransactions);
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    return (
        <div>
            <h2>Accounting Overview</h2>
            <p>Balance: ${balance}</p>
            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.type}: ${transaction.amount} - {transaction.description}
                        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h3>Add New Transaction</h3>
            <form onSubmit={addTransaction}>
                <input
                    type="text"
                    name="type"
                    placeholder="Type (Income/Expense)"
                    value={newTransaction.type}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newTransaction.amount}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newTransaction.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AccountingComponent;
