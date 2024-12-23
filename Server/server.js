const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const config = require('./config');
const bodyParser = require('body-parser');



const app = express();
app.use(cors());
app.use(bodyParser.json()); 

const pool = mysql.createPool(config);


app.get("/Students", (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      let Students = 'SELECT * FROM Students';
  
      connection.query(Students, (err, results, fields) => {
        connection.release();
  
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching data from database');
          return;
        }
  
        console.log(results);
  
        res.json(results);
      });
    });
  });
  
  app.post("/create-student", (req, res) => {
    const formData = req.body;
  
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      const insertQuery = 'INSERT INTO `Students`(`FullName`,`Code_Grade_Book`, `Student_group`, `Course`, `Curator`, `Phone`) VALUES (?,?,?,?,?,?);';
      const values = [formData.FullName, formData.studentId, formData.group, formData.course, formData.curator, formData.phone];

      connection.query(insertQuery, values, (err, result, fields) => {
        connection.release();
  
        if (err) {
          console.error(err);
          res.status(500).send('Ошибка при добавлении данных в базу данных');
          return;
        }
  
        console.log('Данные формы добавлены в базу данных');
        res.sendStatus(200);

      });
    });
  });
  app.delete("/delete-student/:id", (req, res) => {
    const id = req.params.id;
  
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      const deleteQuery = 'DELETE FROM `Students` WHERE `id` = ?';
      connection.query(deleteQuery, id, (err, result, fields) => {
        connection.release();
  
        if (err) {
          console.error(err);
          res.status(500).send('Error deleting data from database');
          return;
        }
  
        console.log('Student deleted successfully');
        res.sendStatus(200);
      });
    });
  });

  app.post("/create-teacher", (req,res) => {
    const formData = req.body;

    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      const insertQuery = 'INSERT INTO `Teachers`(`FullName`, `tab_number`, `degree`, `title`, `department_code`, `phone`) VALUES (?, ?, ?, ?, ?, ?);';
      const values = [formData.FullName, formData.tab_number, formData.degree, formData.title, formData.department_code, formData.phone];
  
      connection.query(insertQuery, values, (err, result, fields) => {
        connection.release();
  
        if (err) {
          console.error(err);
          res.status(500).send('Ошибка при добавлении данных в базу данных');
          return;
        }
  
        console.log('Данные преподавателя добавлены в базу данных');
        res.sendStatus(200);  
    });
  })
});

app.get("/get-teachers", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const query = 'SELECT * FROM Teachers';
    connection.query(query, (err, results, fields) => {
      connection.release();

      if (err) {
        console.error(err);
        res.status(500).send('Error fetching data from database');
        return;
      }

      console.log(results);
      res.json(results);
    });
  });
});

app.delete("/delete-Teachers/:id", (req, res) => {
  const id = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const deleteQuery = 'DELETE FROM `Teachers` WHERE `id` = ?';
    connection.query(deleteQuery, id, (err, result, fields) => {
      connection.release();

      if (err) {
        console.error(err);
        res.status(500).send('Error deleting data from database');
        return;
      }

      console.log('Teachers deleted successfully');
      res.sendStatus(200);
    });
  });
});




  const PORT = 5000;
  
  app.listen(PORT, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server is running at http://localhost:${PORT}`);
  });