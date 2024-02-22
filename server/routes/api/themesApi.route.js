const router = require('express').Router();
const { Theme, Question } = require('../../db/models');

router.get('/theme', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    res.status(200).json({ themes });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/question', async (req, res) => {
  try {
    const quiestion  = await Question.findAll();
    res.status(200).json({ quiestion });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
