import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeleteStudent() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          setStudents(data);
        });
      })
      .catch(error => console.error(error));
  }, []);
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the server to delete the student
      await axios.delete(`http://localhost:5000/delete-student/${id}`);
      // Update the local state by filtering out the deleted student
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.Student_group}</td>
              <td>{student.FullName}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>
                  <i className="fa fa-trash" aria-hidden="true">Удалить</i>
                </button>
              </td>
            </tr>
          ))}
    </>
  );
};

export default DeleteStudent;