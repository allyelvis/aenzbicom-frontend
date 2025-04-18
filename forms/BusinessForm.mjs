import React, { useState } from 'react';

const BusinessForm = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>BusinessForm</h2>
            <input type='text' name='example' onChange={handleChange} placeholder='Example Field' required />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default BusinessForm;
