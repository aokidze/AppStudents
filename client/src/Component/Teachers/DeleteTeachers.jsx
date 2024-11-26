import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeleteTeachers() {
  const [Teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/get-teachers')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          setTeachers(data);
        });
      })
      .catch(error => console.error(error));
  }, []);
  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:5000/delete-Teachers/${id}`);

      setTeachers(Teachers.filter(Teachers => Teachers.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <div className='card-info-delete'>
                {Teachers.map((Teachers, index) => (
                  <table className='TableDeleteStudent'>
                  <tr key={index}>
                    <td className='groupDeletePage'>{Teachers.tab_number}</td>
                    <td>{Teachers.FullName}</td>
                    <td style={{display: 'flex', justifyContent: 'end'}}>
                      <button className="DeleteBtn" onClick={() => handleDelete(Teachers.id)}>
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

export default DeleteTeachers;