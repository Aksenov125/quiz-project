const router = require('express').Router();
const bcrypt = require('bcrypt');
const { sendCookies } = require('../../middleware/sendCookies');
const { User } = require('../../db/models')

router.get('/', async (req, res)=> {
  res.status(200).json(res.locals.user)
})

router.post('/registration', async (req, res) => {
  try {
    const {
      name, email, password,
    } = req.body;

    if (!(name && email && password)) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({ message: 'Password must contain at least 8 symbols' });
      return;
    }

    const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/;
    if (!regexp.test(email)) {
      res.status(400).json({ message: 'Incorrect email' });
      return;
    }

    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(400).json({ message: 'Email already used' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name, email, password: hash,
    });
    sendCookies(newUser)(req, res, () => {
      res.status(201).json({ user:res.locals.user, message: 'confirm' });
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ message: 'All fields are required' });
    }

    const databaseUser = await User.findOne({ where: { email } });
    if (!databaseUser) {
      res.status(400).json({ message: 'Wrong email or password' });
      return;
    }

    const passwordRight = await bcrypt.compare(password, databaseUser.password);
    if (!passwordRight) {
      res.status(400).json({ message: 'Wrong email or password' });
      return;
    }
    sendCookies(databaseUser)(req, res, () => {
      res.status(200).json({ user: { id: databaseUser.id, name: databaseUser.name, email: databaseUser.email}, message: 'confirm' });
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
