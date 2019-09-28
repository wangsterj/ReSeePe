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
    console.log(data);
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
  const options = {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url,
  };

  // axios(options)
  //   .then((response) => {
  //     res.send(response.data.results);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  res.send([{
    id: 215435, title: 'Three-Cheese Pizza (For Cheese Lovers)', readyInMinutes: 45, servings: 8, image: 'three-cheese-pizza-for-cheese-lovers-215435.jpg', imageUrls: ['three-cheese-pizza-for-cheese-lovers-215435.jpg'],
  }, {
    id: 116679, title: 'Leek & Cheese Pie', readyInMinutes: 75, servings: 4, image: 'leek-amp-cheese-pie-2-116679.jpg', imageUrls: ['leek-amp-cheese-pie-2-116679.jpg', 'leek_amp_cheese_pie-116679.jpg'],
  }]);
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
