const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const obraRoutes = require('./obra');
const requisicaoRoutes = require('./requisicao');

router.use('/auth', authRoutes);
router.use('/obras', obraRoutes);
router.use('/requisicoes', requisicaoRoutes);

module.exports = router;
