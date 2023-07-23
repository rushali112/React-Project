const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql')


const app = express();
const PORT = 3600;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Employee',
});

//connecting to databse
connection.connect((err) => {
    if (err) {
      console.error('Error encountered while creating the database:', err.message);
    } else {
      console.log('MSQL Databse Connected');
    }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ error: 'Please enter name & password' });
    }
  
    
    pool.query('INSERT INTO emolyees_details (name, email ,password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
      if (err) {
        console.error('Cannot able to register user', err.message);
        return res.status(500).json({ error: 'Cannot able to register user' });
      }
  
      console.log('Registration successful');
      return res.status(201).json({ message: 'Registration successful' });
    });
});
  


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});