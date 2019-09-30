
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID serial PRIMARY KEY,
  userID text NOT NULL UNIQUE,
  password text NOT NULL
);

DROP TABLE IF EXISTS userLists;
CREATE TABLE userLists (
  ID serial PRIMARY KEY,
  listName text NOT NULL UNIQUE,
  userID int NOT NULL
);
CREATE INDEX ON userLists (userID);

DROP TABLE IF EXISTS recipes;
CREATE TABLE recipes (
  ID serial PRIMARY KEY,
  apiID int NOT NULL,
  name text,
  readyInMinutes text,
  servings int,
  userListsID int NOT NULL
);
CREATE INDEX ON recipes (userListsID);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
