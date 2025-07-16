const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/obras', require('./obra'));
router.use('/requisicoes', require('./requisicao'));

module.exports = router;
