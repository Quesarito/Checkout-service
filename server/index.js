const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/carts', (req, res) => {
  db.mySqlConnection.query('SELECT * FROM cart', (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.post('/carts', (req, res) => {
  db.mySqlConnection.query("INSERT INTO cart(user_id, item_id) VALUES ('1','5' )", (err) => {
    if (err) {
      throw err;
    }
  });
  console.log('we did it');
  res.send(200);
});

// app.get('/cart', (req, res) => {
//   res.sendStatus(200);
//   db.fetch(res.send.bind(res));
// });
