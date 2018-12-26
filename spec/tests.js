const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;

  describe('Persistent Server', function () {
    var dbConnection;

    beforeEach(function(done) {
      dbConnection = mysql.createConnection({
        user: 'root',
        database: 'nav'
      });
      dbConnection.connect();
    });

    afterEach(function() {
      dbConnection.end();
    });

  it('Should get the user from the DB', function(done) {
       const queryString = 'SELECT * FROM users WHERE id=1';

    dbConnection.query(queryString, function(err) {
      if (err) { throw err; }
      request('http://127.0.0.1:1337/users', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].name).to.equal('Lula DuBuque');
        expect(messageLog[0].city).to.equal('Wilkinsonhaven');
        expect(messageLog[0].prime).to.equal('false');
        done();
      });
    });
  });
});
