import express from 'express';import { bcrypt } from 'bcryptjs';
import User from './../model/userSchema.js';
const router = express.Router();

/*
! Through Promises

router.post('/register', (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill the field properly' });
  }

  User.findOne({ email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    user
      .save()
      .then(() => {
        res.status(201).json({ message: 'User registered successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to registeered' });
      })
      .catch((err) => console.log(err));
  });

  console.log(req.body);
  res.send('page');
});
*/

router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill the field properly' });
  }

  try {
    const response = await User.findOne({ email });

    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    } else if (password != cpassword) {
      return res.status(422).json({ error: 'Password are not matching' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (err) {
    console.log(err);
  }

  console.log(req.body);
  res.send('page');
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please Filled the data' });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credentials' });
      } else {
        res.json({ message: 'User Sign Successfully' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials' });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
