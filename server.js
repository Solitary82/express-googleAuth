const express = require('express');
const app = express();
var user = {};

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static("styles"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', user);
});

app.get('/styles/index.css', (req, res) => {
  res.sendFile(__dirname + '/styles/index.css');
});

app.get('/auth/google', (req, res) => {
  res.render('auth/google');
});

app.get('/logout', (req, res) => {
  user = {};
  res.render('index');
});

app.post('/', (req, res) => {
  user = req.body;
  password = req.body.password;
  if (user.email) user.logged = true;
  console.log(user);
  res.render('index', user);
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('Error 404!');
});
