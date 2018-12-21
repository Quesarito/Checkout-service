const mysql = require('mysql');
const faker = require('faker');

let username = '';
let userAddress = '';
let userCity = '';
let userZip = '';
let userState = '';
let userPrime = '';
let userlistName = '';
let itemName = '';
let itemDesc = '';
let itemPriceNew = '';
let itemPriceUsed = '';
let itemStock = '';

const mySqlConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  database: 'nav',
});

mySqlConnection.connect((error) => {
  if (error) {
    throw Error;
  }
  console.log('connected to db');
});

const populator = function () {
  for (let i = 0; i < 100; i + 1) {
    username = faker.name.findName();
    userAddress = faker.address.streetAddress();
    userCity = faker.address.city();
    userZip = faker.address.zipCode();
    userState = faker.address.state();
    userPrime = faker.random.boolean();
    userlistName = faker.random.word();
    itemName = faker.commerce.productName();
    itemDesc = faker.lorem.sentence();
    itemPriceNew = faker.commerce.price();
    itemPriceUsed = faker.commerce.price();
    itemStock = faker.random.number();

    let sqlUsers = `INSERT INTO users (name,address,city,zipcode,state,prime) VALUES ('${username}',
      '${userAddress}','${userCity}','${userZip}','${userState}','${userPrime}');`;

    let sqlLists = `INSERT INTO lists (list_name)VALUES ('${userlistName}');`;

    let sqlItems = `INSERT INTO items (name,description,price_new, price_used,stock_count) VALUES (
      '${itemName}','${itemDesc}','${itemPriceNew}','${itemPriceUsed}','${itemStock}');`;

    // insert user data
    mySqlConnection.query(sqlUsers, (err) => {
      if (err) {
        throw err;
      }
    });
    // insert list data
    mySqlConnection.query(sqlLists, (err) => {
      if (err) {
        throw err;
      }
    });
    // insert item data
    mySqlConnection.query(sqlItems, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};
populator();

module.exports.mySqlConnection = mySqlConnection;
