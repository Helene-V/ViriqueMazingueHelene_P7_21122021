const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.config.js');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, authConfig.secret, (err, user) => {
    if (err) {
      return res.status(403).json({message: 'pb token', err, user, token})
    } else {
      next()
    }
    })

  } catch (error) {
    res.status(401).json({
      error: new Error('Invalid request!')
    })
  }
}



/*
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    //let token = req.headers["x-access-token"]; // Option 2

    const decodedToken = jwt.verify(token, authConfig.secret); 
    
    //const userId = decodedToken.id; dans le controller
    //const userId = decodedToken.userId;
    if (req.body.userId !== userId) {  //(req.body.userId && req.body.userId !== userId)
      throw 'Invalid user ID';
    } else {
      req.userId = decoded.id; //test
      next();
    }
    console.log(decodedToken.header);
    console.log(decodedToken.payload);
  } catch(e) {
    console.log(e);
    res.status(401).json({
      error: new Error(`L'utilisateur n'est pas autorisé à accèder à cette ressource.`)
    });
  }
  console.log(userId)
};

*/
/*
const getToken = (req) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, authConfig.secret);
    const userId = decodedToken.userId;
    console.log(userId)
    return userId;
};

module.exports = getToken;
*/

/*
//const jwt = require('jsonwebtoken');
//const config = require('../config/auth.config.js');
//const db = require('../models');


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
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
*/
//Token - isAdmin ou pas



/* Exemple Pokemon API
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



/* Exemple P6
const jwt = require('jsonwebtoken'); // Implémentation de l'authentification par token pour protéger les routes

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Récupération du token dans le header
    jwt.verify(token, 'RANDOM_TOKEN_SECRET'),(err, user) => {
    if (err) {
      return res.status(403).json({message: 'pb token', err, user, token})
    } else {
      next();
    })
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
*/