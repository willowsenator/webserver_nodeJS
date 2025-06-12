const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

port = process.env.PORT;

headerParams = {
  title: 'Node.js App',
  name: 'Omar Fernando Moreno Benito'
};

// Middleware for public directory
app.use(express.static('public/views'));

app.get('/', (req, res) => {
  res.render('home', headerParams);
});

app.get('/generic', (req, res) => {
  res.render('generic', headerParams);
});

app.get('/elements', (req, res) => {
  res.render('elements', headerParams);
}
);



// 404 handler - place this AFTER all other routes
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});