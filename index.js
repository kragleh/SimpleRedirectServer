require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const redirect = process.env.REDIRECT
var count = 0

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('*', (req, res) => {

  count = ++count

  res.render('index', { 
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    url: process.env.URL,
    img: process.env.IMG,
    color: process.env.COLOR,
    redirect: process.env.REDIRECT
  });

  console.log(`${count}# Redirected a request`)

});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(redirect);
});