import React, { useState } from 'react';

const AccountingForm = () => {
    const [data, setData] = useState({
        name: '',
        type: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>AccountingForm Form</h2>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={data.name} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Type:
                    <input type="text" name="type" value={data.type} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input type="text" name="address" value={data.address} onChange={handleChange} required />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AccountingForm;
