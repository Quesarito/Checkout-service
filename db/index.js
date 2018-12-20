const mysql = require('mysql');
const faker = require('faker');

const username = faker.name.findName();
const userAddress = faker.address.streetAddress();
const userCity = faker.address.city();
const userZip = faker.address.zipCode();
const userState = faker.address.state();
const userPrime = faker.random.boolean();
const userlistName = faker.random.word();
const itemName = faker.commerce.productName();
const itemDesc = faker.lorem.sentences();
const itemPriceNew = faker.commerce.price();
const itemPriceUsed = faker.commerce.price();
const itemStock = faker.random.number();

const mySqlConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  database: 'nav',
});


const sqlUsers = `INSERT INTO users (name,address,city,zipcode,state,prime) VALUES ('${username}','${userAddress}','${userCity}','${userZip}','${userState}','${userPrime}');`;
const sqlLists = `INSERT INTO lists (list_name)VALUES ('${userlistName}');`;
const sqlItems = `INSERT INTO items (name,description,price_new, price_used,stock_count) VALUES ('${itemName}','${itemDesc}','${itemPriceNew}','${itemPriceUsed}','${itemStock}');`;

mySqlConnection.connect((error) => {
  if (error) {
    throw Error;
  }
  console.log('connected to db');
});

const populator = function () {
  for (let i = 0; i < 100; i + 1) {
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

// for (let i = 0; i < 100; i++) {
//   user_name = faker.name.findName();
//   user_address = faker.address.streetAddress();
//   user_city = faker.address.city();
//   user_zip = faker.address.zipCode();
//   user_state = faker.address.state();
//   user_prime = faker.random.boolean();
//   userlist_name = faker.random.word();
//   item_name = faker.commerce.productName();
//   item_desc = faker.lorem.sentence();
//   item_priceNew = faker.commerce.price();
//   item_priceUsed = faker.commerce.price();
//   item_stock = faker.random.number();
//
//   sql_users = `INSERT INTO users (name,address,city,zipcode,state,prime) VALUES ('${user_name}',
//   '${user_address}','${user_city}','${user_zip}','${user_state}','${user_prime}');`;
//
//   sql_lists = `INSERT INTO lists (list_name)VALUES ('${userlist_name}');`;
//
//   sql_items = `INSERT INTO items (name,description,price_new, price_used,stock_count) VALUES (
//   '${item_name}','${item_desc}','${item_priceNew}','${item_priceUsed}','${item_stock}');`;

module.exports.mySqlConnection = mySqlConnection;
