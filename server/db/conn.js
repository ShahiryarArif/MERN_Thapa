import mongoose from 'mongoose';
const DB = process.env.DATABASE;

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
