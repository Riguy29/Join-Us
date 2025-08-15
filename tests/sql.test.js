//Temporary commonted out code because of issues with cesu8 encoding in Node.js v24+
// require('iconv-lite').encodingExists('cesu8') 

//We are running into issues which cause JEST to crash however this is after all the tests have passed so....fine for now
describe('SQL Tests', () => {
    var sql = require('../sql');
    var testPerson = {
        email: 'DELETEME@GMAIL.COM',
    }
    test('Can Connect to database', () => {

        sql.connectToDatabase();
        expect(sql.getConnection()).not.toBeNull();
    });

    test('Can Insert User And Delete User Into Database', (done) => {
        sql.makeQuery('INSERT INTO users SET ?', testPerson, (err, results) => {
            expect(err).toBeNull();
            expect(results.affectedRows).toBe(1);
        });
        sql.makeQuery('DELETE FROM users WHERE email = ? ', [testPerson.email], (err, results) => {
            expect(err).toBeNull();
            expect(results.affectedRows).toBe(1);
            done();
        });
    });


});