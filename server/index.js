const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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

app.get('/movies', (req, res) => {
  res.send(movies)
})
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });
