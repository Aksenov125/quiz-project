const router = require('express').Router();
const { Question, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    let { answer, id } = req.body;

    if (!(answer && id)) {
      res.status(400).json({ message: 'Data required', result: null });
    }

    answer = answer.toLowerCase().trim();
    const question = await Question.findOne({ where: { id } });

    if (!question) {
      res.status(400).json({ message: 'Question not found', result: null });
    }

    if (question.answer === answer) {
      // calculate score
      await User.update({ where: { } }, { price: question.price });
      res.status(200).json({ message: 'confirm', result: true });
    } else {
      res.status(200).json({ message: 'confirm', result: false });
    }
  } catch ({ message }) {
    res.status(500).json({ message, result: null });
  }
});

module.exports = router;
