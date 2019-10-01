const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiKey = require('../api_key.js');

const items = require('../database-mysql');
// var items = require('../database-mongo');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/api/favoriteRecipes/:userID', (req, res) => {
  const { userID } = req.params;
  items.selectFavorites(userID, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/favoriteRecipes', (req, res) => {
  const { userID, recipeItem } = req.body;
  items.addFavorite(userID, recipeItem, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully Added!');
    }
  });
});

app.delete('/api/favoriteRecipes/:id/:userID', (req, res) => {
  const { id, userID } = req.params;
  items.deleteFavorite(id, userID, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send('Successfully Deleted!');
  });
});

app.get('/api/allItems', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data.rows);
    }
  });
});

app.get('/api/items/:id', (req, res) => {
  let { id } = req.params;
  if (!id) {
    id = 0;
  }
  items.selectOne(id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/recipe-query/:query', (req, res) => {
  const { query } = req.params;
  const url = `https://api.spoonacular.com/recipes/search?query=${query}&number=2&apiKey=${apiKey}`;
  // axios.get(url)
  //   .then((response) => {
  //     const { results } = response.data;
  //     res.send(response.data.results);
  //   });

  res.send([{
    id: 215435, title: 'Three-Cheese Pizza (For Cheese Lovers)', readyInMinutes: 45, servings: 8, image: 'three-cheese-pizza-for-cheese-lovers-215435.jpg', imageUrls: ['three-cheese-pizza-for-cheese-lovers-215435.jpg'],
  }, {
    id: 116679, title: 'Leek & Cheese Pie', readyInMinutes: 75, servings: 4, image: 'leek-amp-cheese-pie-2-116679.jpg', imageUrls: ['leek-amp-cheese-pie-2-116679.jpg', 'leek_amp_cheese_pie-116679.jpg'],
  }]);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  items.validPassword(password, username, (err, isValid, id) => {
    if (err) {
      res.send(err);
    }
    res.send({ isValid, id });
  });
});

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  items.saveUser(password, username, (err, isValid) => {
    if (err) {
      res.send(err);
    }
    res.send(isValid);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
