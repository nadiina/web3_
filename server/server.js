const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

app.get("/api", (req, res)=>{
    res.json({"users":["one", "two", "three"]});
})

const db = new sqlite3.Database('database.db');

app.get('/api/questions', (req, res) => {
    db.all('SELECT * FROM questions', (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/api/questions', (req, res) => {
    const { question, options } = req.body;
    db.run('INSERT INTO questions (question, options) VALUES (?, ?)', [question, JSON.stringify(options)], function (err) {
        if (err) {
            res.status(400).json({ message: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.use(express.json());

let userProfile = {
    name: 'Nadiia 2',
    email: 'test@1.com',
    gender: 'Female',
    dob: '2004-01-01'
};

app.get('/api/profile', (req, res) => {
    res.json(userProfile);
});

app.post('/api/profile', (req, res) => {
    userProfile = req.body;
    res.json({ message: 'Profile updated successfully' });
});
app.put('/api/profile', (req, res) => {
    userProfile = req.body;
    res.json(userProfile);
});

app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
