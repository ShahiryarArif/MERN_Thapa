import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world from the server');
  console.log(this);
});

app.get('/about', (req, res) => {
  res.send('Hello About world from the server');
  console.log(this);
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact world from the server');
  console.log(this);
});

app.get('/signin', (req, res) => {
  res.send('Hello Login world from the server');
  console.log(this);
});

app.get('/signup', (req, res) => {
  res.send('Hello Registration world from the server');
  console.log(this);
});

app.listen(3000, () => {
  console.log('Server is running');
});
