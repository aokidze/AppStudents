import React, { useState } from 'react';
import axios from 'axios';


function CreateStudent() {
  const [formData, setFormData] = useState({
    FullName: '',
    studentId: '',
    group: '',
    course: '',
    curator: '',
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
    
    axios.post('http://localhost:5000/create-student', formData, {
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
      <h2 style={{ textAlign: 'center' }}>Добавить Студента</h2>
      <form onSubmit={handleSubmit}method="POST">
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
          <label htmlFor="studentId">Зач. книжка:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="group">Группа:</label>
          <input
            type="text"
            id="group"
            name="group"
            value={formData.group}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="course">Курс:</label>
          <input
            type="number"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="curator">Куратор:</label>
          <input
            type="text"
            id="curator"
            name="curator"
            value={formData.curator}
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

export default CreateStudent;
