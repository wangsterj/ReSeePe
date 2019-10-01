const { Client } = require('pg');
const bcrypt = require('bcrypt');

const client = new Client({ database: 'reseepe' });
client.connect();


const selectAll = function (callback) {
  client.query('SELECT * FROM items', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectOne = function (id, callback) {
  client.query(`SELECT * FROM items where id = ${id}`, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectFavorites = function (id, callback) {
  client.query(`SELECT * FROM recipes WHERE userID = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

const addFavorite = function (userID, recipeItem, callback) {
  const {
    id, title, readyInMinutes, servings,
  } = recipeItem;
  const query = `INSERT INTO recipes (apiID, title, readyInMinutes, servings, userID) VALUES (${id},$1,${readyInMinutes},${servings},${userID})`;
  client.query(query, [title], (err, results) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteFavorite = function (id, userID, callback) {
  const query = `DELETE FROM recipes WHERE userID = ${userID} AND id = ${id}`;
  console.log(query);
  client.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// values: ['userid', 'password']
const saveUser = function (password, userID, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      // Store hash in users DB.
      client.query('INSERT INTO users (userID, password) VALUES($1, $2)', [userID, hash], (err) => {
        if (err) {
          console.log(err);
          callback(null, false);
        } else {
          console.log('Successfully stored user');
          callback(null, true);
        }
      });
    });
  });
};

// takes in a password and compares with password saved in db based on userID
const validPassword = function (password, user, callback) {
  const query = `SELECT password, id FROM users WHERE userid = '${user}'`;
  client.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      // if no user exists
      if (results.rows.length === 0) {
        callback(null, false);
      } else {
        // return true if matches
        const dbPassword = results.rows[0].password;
        const { id } = results.rows[0];
        callback(null, bcrypt.compareSync(password, dbPassword), id);
      }
    }
  });
  // console.log(password, dbPassword);
  // return bcrypt.compareSync(password, dbPassword);
};

module.exports = {
  selectAll, selectOne, validPassword, saveUser, selectFavorites, addFavorite, deleteFavorite,
};
