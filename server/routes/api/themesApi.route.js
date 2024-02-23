const router = require('express').Router();
const { Theme, Question, User } = require('../../db/models');

router.get('/theme', async (req, res) => {
  try {
    const themes = await Theme.findAll({ include: { model: Question } });
    res.status(200).json({ themes });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/question', async (req, res) => {
  try {
    let { answer, id } = req.body;

    if (!(answer && id)) {
      res.status(400).json({ message: 'Data required', result: null });
    }

    if (!res.locals.user) {
      res.status(400).json({ message: 'У вас нет доступа, зарегестрируйтесь', result: null });
    }

    answer = answer.toLowerCase().trim();
    const question = await Question.findOne({ where: { id } });

    if (!question) {
      res.status(400).json({ message: 'Question not found', result: null });
    }
    if (question.answer === answer) {
      const user = await User.findOne({ where: { id: res.locals.user.id } });
      const newScore = user.score + question.price;
      await User.update({ score: newScore }, { where: { id: user.id } });
      res.status(200).json({ message: 'confirm', result: true, score: newScore });
    } else {
      const user = await User.findOne({ where: { id: res.locals.user.id } });
      const newScore = user.score - question.price;
      await User.update({ score: newScore }, { where: { id: user.id } });
      res.status(200).json({ message: 'confirm', result: false, score: newScore });
    }
  } catch ({ message }) {
    res.status(500).json({ message, result: null });
  }
});

module.exports = router;
