const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const router = express.Router();

var movies = [
  {title: 'Mean Girls',
  name: 'arglebargle', job: 'engineer'},
  {title: 'Hackers',
  name: 'zulu', job: 'boss'},
  {title: 'The Grey',
  name: 'tutsi', job: 'shaykh'},
  {title: 'Sunshine', name: 'wahed', job: 'investor'},
  {title: 'Ex Machina', name: 'haroon', job: 'king'},
];

//first routes
// router.get('/movies', function(req, res) {
//   res.send(movies)
// })
//
// router.post('/movies', function(req, res) {
//   res.send('received??')
// })
app.use(bodyParser.json())
app.get('/movies', (req, res) => {
  res.send(movies)
})
app.post('/movies', (req, res) => {
  let body= '';

  req.on('data', (chunk) => {
    body += chunk;
    movies.push(JSON.parse(body))
    res.send(movies);
  })



});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });
