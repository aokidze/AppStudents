import React, { useState } from 'react';
import axios from 'axios';

function CreateTeachers() {
  const [formData, setFormData] = useState({
    FullName: '',
    tab_number: '',
    degree: '',
    title: '',
    department_code: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend
    console.log('Form submitted:', formData);
    
    axios.post('http://localhost:5000/create-teacher', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log(response.data);
      console.log('Form submitted successfully');
    })
    .catch(error => {
      console.error(error);
      console.log('Error submitting form');
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', position: "relative", top: "13%" }}>
      <h2 style={{ textAlign: 'center' }}>Добавить Преподавателя</h2>
      <form onSubmit={handleSubmit} method="POST">
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="FullName">ФИО:</label>
          <input
            type="text"
            id="FullName"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="tab_number">Табельный номер:</label>
          <input
            type="text"
            id="tab_number"
            name="tab_number"
            value={formData.tab_number}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="degree">Уч степень:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title">Уч звание:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="department_code">Код кафедры:</label>
          <input
            type="text"
            id="department_code"
            name="department_code"
            value={formData.department_code}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Добавить</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTeachers;
