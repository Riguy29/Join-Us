
// CJS
const { faker, fakerDA } = require('@faker-js/faker');



const express = require('express');
const app = express();
const SQL = require('./sql.js');
SQL.connectToDatabase();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    SQL.makeQuery('SELECT COUNT(*) FROM users', [], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const count = results[0]['COUNT(*)'];
            // res.render('index');
            res.render('index', { count: count });
            // res.send(`Total users: ${count}`);
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


