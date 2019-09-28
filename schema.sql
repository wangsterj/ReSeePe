DROP TABLE IF EXISTS items;

CREATE TABLE items (
  ID serial PRIMARY KEY,
  quantity integer NOT NULL,
  description text NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
