import express from 'express';
import User from './../model/userSchema';
const router = express.Router();

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

export default router;
