
// CJS
const { faker } = require('@faker-js/faker');

const mysql2 = require('mysql2');

var connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Starwars1!',
    database: 'join_us',
});

var q = 'SELECT CURRDATE()';

connection.query('SELECT 1+6', function (error, results, fields){
    if(error) throw error;
    console.log(results)
});

connection.end();