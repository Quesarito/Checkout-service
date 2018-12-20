const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('../db/index.js');
const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
