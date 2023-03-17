import express from 'express';
import './env.js';
import './db/conn.js';
import auth from './routes/auth.js';
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(auth);

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

/*
For connecting with Mongo DB
mongodb+srv://<username>:<password>@cluster0.kgszmri.mongodb.net/?retryWrites=true&w=majority
*/
