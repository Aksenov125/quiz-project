const router = require('express').Router();
const { Restaurant } = require('../../db/models')

router.get('/', async (req, res) => {
    try {
      const rests = await Restaurant.findAll()
      res.status(200).json({rests})
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  });
  
  module.exports = router;