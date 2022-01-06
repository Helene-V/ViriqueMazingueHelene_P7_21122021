const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
//const db = require('../models');


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
//  isAdmin: isAdmin
};
module.exports = authJwt;

//Token - isAdmin ou pas ?

/* Exemple P6
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')
  
module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization // c'est dans cette entête que le jeton va transiter
  
  if(!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
    return res.status(401).json({ message })
  }
    
    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
    if(error) {
      const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
      return res.status(401).json({ message, data: error })
    }
  
    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant de l'utilisateur est invalide.`
      res.status(401).json({ message })
    } else {
      next()
    }
  })
}
*/