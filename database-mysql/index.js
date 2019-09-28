const { Client } = require('pg');

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

module.exports = { selectAll, selectOne };
