const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ message: 'Token não fornecido.' });

  jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Token inválido.' });
    req.user = decoded;
    next();
  });
};
