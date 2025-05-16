// File: src/pages/Claim.jsx
import React, { useState } from 'react';

const Claim = () => {
  const [form, setForm] = useState({ name: '', policyNumber: '', details: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Claim submitted!\n" + JSON.stringify(form));
  };

  return (
    <div className="claim-form">
      <h2>Submit a Claim</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="policyNumber" placeholder="Policy Number" onChange={handleChange} required />
        <textarea name="details" placeholder="Describe your claim" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Claim;
