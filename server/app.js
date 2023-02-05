import express from 'express';
const app = express();

const middleware = (req, res, next) => {
  console.log('Hello my Middleware');
  next();
};

app.get('/', (req, res) => {
  res.send('Hello world from the server');
});

app.get('/about', middleware, (req, res) => {
  console.log('Hello my About');
  res.send('Hello About world from the server');
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact world from the server');
});

app.get('/signin', (req, res) => {
  res.send('Hello Login world from the server');
});

app.get('/signup', (req, res) => {
  res.send('Hello Registration world from the server');
});

app.listen(3000, () => {
  console.log('Server is running');
});
