
const items = require('../database-mysql');

// items.saveUser({ userID: 'justin', password: 'wang' });
// return items.validPassword('wang', 'justin', (err, results) => {
//   if (err) {
//     console.log(err);
//     // res.send(err);
//   }
//   console.log(results);
// });

return items.saveUser('wang', 'justin', (err, results) => {
  if (err) {
    console.log(err);
    // res.send(err);
  }
  console.log(results);
});
