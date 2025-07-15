require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`TotalSupply API rodando na porta ${PORT}`);
});
