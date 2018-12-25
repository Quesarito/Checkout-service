const mysql = require('mysql');
const faker = require('faker');

const mySqlConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  database: 'nav',
});

mySqlConnection.connect((error) => {
  if (error) {
    throw error;
  } 
  console.log('connected to db');
});


let populator = function () {
  for (let i = 0; i < 100; i++) {
    let username = faker.name.findName();
    let userAddress = faker.address.streetAddress();
    let userCity = faker.address.city();
    let userZip = faker.address.zipCode();
    let userState = faker.address.state();
    let userPrime = faker.random.boolean();
    let userlistName = faker.random.word();
    let itemName = faker.commerce.productName();
    let itemDesc = faker.lorem.sentence();
    let itemPriceNew = faker.commerce.price();
    let itemPriceUsed = faker.commerce.price();
    let itemStock = faker.random.number();

    let sqlUsers = `INSERT INTO users (name,address,city,zipcode,state,prime) VALUES ('${username}','${userAddress}','${userCity}','${userZip}','${userState}','${userPrime}');`;

    let sqlLists = `INSERT INTO lists (list_name)VALUES ('${userlistName}');`;

    let sqlItems = `INSERT INTO items (name,description,price_new, price_used,stock_count) VALUES ('${itemName}','${itemDesc}','${itemPriceNew}','${itemPriceUsed}','${itemStock}');`;


    // insert user data
    if (i < 1) {
      mySqlConnection.query(sqlUsers, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    // insert list data
    if (i < 3) {
      mySqlConnection.query(sqlLists, (err) => {
        if (err) {
          throw err;
        }
      });
    }
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
