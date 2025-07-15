const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  res.json([{ id: 1, nome: 'Obra Exemplo' }]);
});

module.exports = router;
