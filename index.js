require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const url = process.env.URL
var count = 0

app.get('*', (req, res) => {
  count = ++count
  res.redirect(url);
  console.log(`${count}# Redirected a request`)
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(url);
});