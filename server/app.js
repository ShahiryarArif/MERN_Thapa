import express from 'express';
import mongoose from 'mongoose';
const app = express();

const DB = `mongodb+srv://admin:admin@cluster0.kgszmri.mongodb.net/mern_thapa?retryWrites=true&w=majority`;

/*
In case get a depreciation warning
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false
*/
mongoose
  .connect(DB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log('no conneection');
  });

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
