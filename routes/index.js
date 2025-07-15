const express = require('express');
const router = express.Router();
const obraRoutes = require('./obra');
const requisicaoRoutes = require('./requisicao');
const authRoutes = require('./auth');

router.use('/obras', obraRoutes);
router.use('/requisicoes', requisicaoRoutes);
router.use('/auth', authRoutes);

module.exports = router;
