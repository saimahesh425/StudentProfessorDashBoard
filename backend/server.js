const express = require('express');
const cors = require('cors');
const { sql, dbConfig } = require('./db'); // Ensure correct import of dbConfig
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Signup route
app.post('/signup', async (req, res) => {
    const { name, email, password, role, date_of_birth, phone_number, department } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .input('role', sql.NVarChar, role)
            .input('date_of_birth', sql.Date, date_of_birth)
            .input('phone_number', sql.NVarChar, phone_number)
            .input('department', sql.NVarChar, department)
            .query('INSERT INTO Users (name, email, password, role, date_of_birth, phone_number, department) VALUES (@name, @email, @password, @role, @date_of_birth, @phone_number, @department)');
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');
        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.status(200).send({ message: 'Login successful', user });
            } else {
                res.status(401).send({ message: 'Invalid credentials' });
            }
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


app.use(express.json());
app.use(cors());

// Signup route
app.post('/signup', async (req, res) => {
    const { name, email, password, role, date_of_birth, phone_number, department } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .input('role', sql.NVarChar, role)
            .input('date_of_birth', sql.Date, date_of_birth)
            .input('phone_number', sql.NVarChar, phone_number)
            .input('department', sql.NVarChar, department)
            .query('INSERT INTO Users (name, email, password, role, date_of_birth, phone_number, department) VALUES (@name, @email, @password, @role, @date_of_birth, @phone_number, @department)');
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');
        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.status(200).send({ message: 'Login successful', user });
            } else {
                res.status(401).send({ message: 'Invalid credentials' });
            }
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Get student details
app.get('/user/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT name, date_of_birth, phone_number, email, role, department, class_rank, attendance, achievements, performance FROM Users WHERE email = @email');
        
        if (result.recordset.length > 0) {
            res.status(200).send(result.recordset[0]);
        } else {
            res.status(404).send({ message: 'Student not found' });
        }
    } catch (error) {
        console.error('Error fetching student data:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});


// Update student details by professor
app.put('/user/:email', async (req, res) => {
    const { email } = req.params;
    const { class_rank, attendance, achievements, performance, test_performance } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .input('class_rank', sql.NVarChar, class_rank)
            .input('attendance', sql.Int, attendance)
            .input('achievements', sql.NVarChar, achievements)
            .input('performance', sql.NVarChar, performance)
            .input('test_performance', sql.NVarChar, test_performance)
            .query('UPDATE Users SET class_rank = @class_rank, attendance = @attendance, achievements = @achievements, performance = @performance, test_performance = @test_performance WHERE email = @email');
        if (result.rowsAffected[0] > 0) {
            res.status(200).send({ message: 'Student details updated successfully' });
        } else {
            res.status(404).send({ message: 'Student not found' });
        }
    } catch (error) {
        console.error('Error updating student data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Start server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
