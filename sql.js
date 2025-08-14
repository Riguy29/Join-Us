
const mysql2 = require('mysql2');
class SQLSingleton{
    constructor() {
        if (!SQLSingleton.instance) {
            this.connection = null;
            SQLSingleton.instance = this;
        }
    }

    connectToDatabase() {
    this.connection = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Starwars1!',
        database: 'join_us',
    });
    }

    closeConnection() {
        if (this.connection) {
            this.connection.end();
        }
    }

    getConnection() {
        return this.connection;
    }

    makeQuery(query, params, callback) {
        if (!this.connection) {
            this.connectToDatabase();
        }
        this.connection.query(query, params, callback);
    }

}


module.exports = new SQLSingleton();
// var bulkFakeData = [];
// for (let i = 0; i < 500; i++) {
//     var fakeUserData = { email: faker.internet.email(), created_at: faker.date.past() };
//     bulkFakeData.push(fakeUserData);
// };
// connection.query('INSERT INTO users (email, created_at) VALUES ?', [bulkFakeData.map(user => [user.email, user.created_at])], function (err, results){
//     if (err) {
//         console.error('Error inserting data:', err);
//     } else {
//         console.log('Inserted rows:', results.affectedRows);
//     }
// });

// connection.query('SELECT * FROM users ORDER BY created_at LIMIT 1', function (err, results){
//     if (err) {
//         console.error('Error fetching data:', err);
//     } else {
//         console.log('Most recent user:', results[0].email);
//     }
// });

// connection.query('SELECT monthname(created_at) as month, COUNT(*) as Signups FROM users GROUP BY month', function (err, results){
//     if (err) {
//         console.error('Error fetching data:', err);
//     } else {
//         results.forEach(row => {
//             console.log(`Month: ${row.month}, Signups: ${row.Signups}`);
//         });
//     }
// });

// connection.query('SELECT COUNT(*) FROM users WHERE email LIKE "%yahoo.com"', function (err, results){
//     if (err) {
//         console.error('Error fetching data:', err);
//     } else {
//         console.log('Number of Yahoo users:', results[0]['COUNT(*)']);
//     }
// });

// connection.query('SELECT SUBSTRING(email, LOCATE("@",email), length(email)) as email_provider, COUNT(*) FROM users GROUP BY email_provider', function (err, results){
//     if (err) {
//         console.error('Error fetching data:', err);
//     } else {
//         results.forEach(row => {
//             console.log(`Email Provider: ${row.email_provider}, Count: ${row['COUNT(*)']}`);
//         });
//     }
// });