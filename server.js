require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./config/db');

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', routes);

const PORT = process.env.PORT || 10000;

db.authenticate()
  .then(() => console.log("🟢 Banco conectado com sucesso"))
  .catch((err) => console.error("🔴 Erro ao conectar no banco:", err));

app.listen(PORT, () => {
  console.log(`✅ TotalSupply API rodando na porta ${PORT}`);
});
