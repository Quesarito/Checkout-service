const mysql = require('mysql');
const faker = require('faker');
const _ = require('underscore');

let user_name = faker.name.findName();
let user_address = faker.address.streetAddress();
let user_city = faker.address.city();
let user_zip = faker.address.zipCode();
let user_state = faker.address.state();
let user_prime = faker.random.boolean();
let userlist_name = faker.random.word();
let item_name = faker.commerce.productName();
let item_desc = faker.lorem.sentences();
let item_priceNew = faker.commerce.price();
let item_priceUsed = faker.commerce.price();
let item_stock = faker.random.number();

const mySqlConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  database: 'nav',
});


const sql_users = `INSERT INTO users (name,address,city,zipcode,state,prime) VALUES ('${user_name}','${user_address}','${user_city}','${user_zip}','${user_state}','${user_prime}');`;
const sql_lists = `INSERT INTO lists (list_name)VALUES ('${userlist_name}');`;
const sql_items = `INSERT INTO items (name,description,price_new, price_used,stock_count) VALUES ('${item_name}','${item_desc}','${item_priceNew}','${item_priceUsed}','${item_stock}');`;

mySqlConnection.connect((error) => {
  if (error) {
    throw Error;
  }
  console.log('connected to db');
});

const populator = function () {
  for (let i = 0; i < 100; i++) {
    // insert user data
    mySqlConnection.query(sql_users, (err) => {
      if (err) {
        throw err;
      }
    });
    // insert list data
    mySqlConnection.query(sql_lists, (err) => {
      if (err) {
        throw err;
      }
    });
    // insert item data
    mySqlConnection.query(sql_items, (err) => {
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
