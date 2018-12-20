
CREATE DATABASE IF NOT EXISTS nav;

USE nav;

    CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zipcode VARCHAR(255),
    prime VARCHAR(255),
    PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS items(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    price_new VARCHAR(255),
    price_used VARCHAR(255),
    stock_count INT,
    PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS lists(
    list_name VARCHAR(255),
    user_id INT,
    item_id INT,
    FOREIGN KEY (user_id)
      REFERENCES users(id),
    FOREIGN KEY (item_id)
      REFERENCES items(id)
    );

    CREATE TABLE IF NOT EXISTS cart(
    user_id INT,
    item_id INT,
    FOREIGN KEY (user_id)
      REFERENCES users(id),
    FOREIGN KEY (item_id)
      REFERENCES items(id)
    );




/*  Execute this file from the command line by typing:
 *    mysql -u root < ??????/schema.sql
 *  to create the database and the tables.*/
