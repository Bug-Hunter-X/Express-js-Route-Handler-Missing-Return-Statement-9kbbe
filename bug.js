const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); //this was missing a return statement which would cause a bug
  }
  res.json(userData);
});