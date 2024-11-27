import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeleteStudent() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/Students')
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

      await axios.delete(`http://localhost:5000/delete-student/${id}`);

      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <div className='card-info-delete'>
                {students.map((student, index) => (
                  <table className='TableDeleteStudent'>
                  <tr key={index}>
                    <td className='groupDeletePage'>{student.Student_group}</td>
                    <td>{student.FullName}</td>
                    <td style={{display: 'flex', justifyContent: 'end'}}>
                      <button className="DeleteBtn" onClick={() => handleDelete(student.id)}>
                        <i aria-hidden="true">Удалить</i>
                      </button>
                    </td>
                  </tr>
                  </table>
                ))}
            </div>
          </div>
    </>
  );
};

export default DeleteStudent;

